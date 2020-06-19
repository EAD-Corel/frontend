import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoursesInRequest } from "../../store/modules/getCourses/actions";
import { MarginTop, Flex, SessionBtn } from "./styles";
import Content from "../../components/content";
import { Grid } from "@material-ui/core";
import Button from "../../components/button";

const ListCourse = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const courses = useSelector((state) => state.getCourses);

  useMemo(() => {
    dispatch(getCoursesInRequest(token));
  }, []);

  return (
    <MarginTop>
      <Grid container spacing={1}>
        {courses &&
          courses.data &&
          courses.data.length &&
          courses.data.map((data, i) => (
            <Grid item xs={12} md={3} lg={3} key={i}>
              <Content>
                {data.name}
                <Flex>
                  <SessionBtn>
                    <Button label="Editar" color="primary" />
                  </SessionBtn>
                  <SessionBtn>
                    <Button label="Administrar" color="secondary" />
                  </SessionBtn>
                </Flex>
              </Content>
            </Grid>
          ))}
      </Grid>
    </MarginTop>
  );
};

export default ListCourse;
