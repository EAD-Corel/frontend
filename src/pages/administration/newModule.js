import React, { useState, useMemo } from "react";
import Modal from "../../components/modal";
import { Grid } from "@material-ui/core";
import Input from "../../components/input";
import Button from "../../components/button";
import Select from "../../components/select";
import { SessionBtn } from "./styles";
import api from "../../services/api";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { getCoursesInRequest } from "../../store/modules/getCourses/actions";

const NewModule = ({ open, close }) => {
  const [info, setInfo] = useState({
    idCourse: null,
    name: null,
  });

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const courses = useSelector((state) => state.getCourses);

  const newModule = async (ev) => {
    ev.preventDefault();

    try {
      await api.post(`/modules/`, info, {
        headers: { Authorization: `Bearer ${token}` },
      });
      Swal.fire("Muito Bem!", "Módulo adicionado com sucesso!", "success");
      close();
    } catch (err) {
      console.log(err);
    }
  };

  useMemo(() => {
    dispatch(getCoursesInRequest(token));
  }, []);

  return (
    <Modal open={open} close={close} title="Novo Módulo">
      <form onSubmit={newModule}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Input
              name="name"
              label="Nome"
              placeholder="Digite o nome do modulo"
              value={info.name}
              onChange={(ev) => setInfo({ ...info, name: ev.target.value })}
              required
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Select
              name="course"
              label="Curso"
              placeholder="Selecione o curso"
              value={info.idCourse}
              onChange={(ev) => setInfo({ ...info, idCourse: ev.target.value })}
              required
            >
              <option>Selecione o Curso</option>
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

export default NewModule;
