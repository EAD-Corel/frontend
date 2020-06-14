import React, { useMemo, useState } from "react";
import Content from "../../components/content";
import Title from "../../components/title";
import { useSelector } from "react-redux";
import api from "../../services/api";
import { Grid } from "@material-ui/core";
import CardCourse from "../../components/cardCourses";
import Loading from "../../components/loading";

const Courses = () => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);

  const user = useSelector((state) => state.user.data);
  const token = useSelector((state) => state.auth.token);

  const getCourse = async (id) => {
    setLoading(true);
    try {
      const response = await api.get(`/courses/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoading(false);
      response.data.map((data) =>
        setCourses((oldArray) => [...oldArray, data])
      );
    } catch (err) {
      setLoading(false);
    }
  };

  useMemo(() => {
    if (user && user.enrollments && user.enrollments.length) {
      user.enrollments.map((data) => getCourse(data.course));
    }
  }, [user]);

  return (
    <>
      <Title
        title="Cursos"
        subTitle="Aqui são todos os cursos que você tem acesso."
      />
      <Content>
        {courses && courses.length && !loading ? (
          <Grid container spacing={2}>
            {courses.map((data, i) => (
              <Grid item xs={12} md={3} lg={3}>
                <CardCourse
                  image={data.image}
                  name={data.name}
                  text={data.description}
                />
              </Grid>
            ))}
          </Grid>
        ) : null}
        {loading && <Loading />}
      </Content>
    </>
  );
};

export default Courses;
