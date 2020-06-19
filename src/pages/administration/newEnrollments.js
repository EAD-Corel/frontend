import React, { useState, useMemo } from "react";
import Modal from "../../components/modal";
import { Grid } from "@material-ui/core";
import Input from "../../components/input";
import Button from "../../components/button";
import { useSelector, useDispatch } from "react-redux";
import { SessionBtn } from "./styles";
import { getCoursesInRequest } from "../../store/modules/getCourses/actions";
import { getUsersInRequest } from "../../store/modules/getUsers/actions";
import api from "../../services/api";
import Swal from "sweetalert2";
import Select from "../../components/select";

const NewEnrollments = ({ open, close }) => {
  const [info, setInfo] = useState({
    student: null,
    course: null,
  });

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const courses = useSelector((state) => state.getCourses);
  const users = useSelector((state) => state.getUSers);

  useMemo(() => {
    console.log(users);
  }, [users]);

  useMemo(() => {
    dispatch(getCoursesInRequest(token));
    dispatch(getUsersInRequest(token));
  }, []);

  const newEnrollment = async (ev) => {
    ev.preventDefault();

    try {
      await api.post(`/enrollments/`, info, {
        headers: { Authorization: `Bearer ${token}` },
      });
      Swal.fire("Muito Bem!", "Aluno adicionado com sucesso", "success");
      close();
    } catch (err) {
      Swal.fire("Ops!", "Não foi possível adicionar esse aluno", "error");
    }
  };

  return (
    <Modal open={open} close={close} title="Novo Aluno">
      <form onSubmit={newEnrollment}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Select
              name="aluno"
              label="Aluno"
              placeholder="Selecione o aluno"
              value={info.student}
              onChange={(ev) => setInfo({ ...info, student: ev.target.value })}
              required
            >
              <option>Selecione o aluno</option>
              {users &&
                users.data &&
                users.data.length &&
                users.data.map((data, i) => (
                  <option value={data.id} key={i}>
                    {data.name}
                  </option>
                ))}
            </Select>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Select
              name="course"
              label="Curso"
              placeholder="Selecione o curso"
              value={info.course}
              onChange={(ev) => setInfo({ ...info, course: ev.target.value })}
              required
            >
              <option>Selecione o curso</option>
              {courses &&
                courses.data &&
                courses.data.length &&
                courses.data.map((data, i) => (
                  <option value={data.id} key={i}>
                    {data.name}
                  </option>
                ))}
            </Select>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Grid container>
              <SessionBtn>
                <Button
                  label="Cancelar"
                  color="secondary"
                  onClick={() => close()}
                />
              </SessionBtn>
              <SessionBtn>
                <Button label="Salvar" color="primary" type="submit" />
              </SessionBtn>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Modal>
  );
};

export default NewEnrollments;
