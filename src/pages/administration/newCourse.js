import React, { useState } from "react";
import Modal from "../../components/modal";
import { Grid } from "@material-ui/core";
import Input from "../../components/input";
import Button from "../../components/button";
import Textarea from "../../components/textarea";
import FileBase64 from "react-file-base64";
import { SessionBtn } from "./styles";
import api from "../../services/api";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { getCoursesInRequest } from "../../store/modules/getCourses/actions";

const NewCourse = ({ open, close }) => {
  const [info, setInfo] = useState({
    name: null,
    description: null,
    image: null,
  });

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const newCourse = async (ev) => {
    ev.preventDefault();

    try {
      await api.post(`/courses/`, info, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(getCoursesInRequest(token));
      Swal.fire("Muito Bem!", "Curso adicionado com sucesso!", "success");
      close();
    } catch (err) {
      console.log(err);
    }
  };

  const getImage = (ev) => {
    setInfo({ ...info, image: ev.base64 });
  };

  return (
    <Modal open={open} close={close} title="Novo Curso">
      <form onSubmit={newCourse}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Input
              name="name"
              label="Nome"
              placeholder="Digite o nome do curso"
              value={info.name}
              onChange={(ev) => setInfo({ ...info, name: ev.target.value })}
              required
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Textarea
              name="description"
              label="Descrição"
              placeholder="Breve desrição do curso"
              value={info.description}
              onChange={(ev) =>
                setInfo({ ...info, description: ev.target.value })
              }
              required
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <p>Imagem:</p>
            <FileBase64 multiple={false} onDone={getImage} />
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

export default NewCourse;
