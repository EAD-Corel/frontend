import React, { useState, useMemo } from "react";
import Modal from "../../components/modal";
import { Grid, LinearProgress } from "@material-ui/core";
import Input from "../../components/input";
import Textarea from "../../components/textarea";
import Button from "../../components/button";
import Select from "../../components/select";
import { useSelector, useDispatch } from "react-redux";
import { SessionBtn, SessionProgress, PercentProgress } from "./styles";
import api from "../../services/api";
import Swal from "sweetalert2";
import { getCoursesInRequest } from "../../store/modules/getCourses/actions";
import "filepond/dist/filepond.min.css";

const NewClasse = ({ open, close }) => {
  const [modules, setModules] = useState([]);
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(null);
  const [sucess, setSucess] = useState(false);
  const user = useSelector((state) => state.user);
  const [info, setInfo] = useState({
    name: null,
    video: null,
    description: null,
    author: user.data.id,
    module: null,
    course: null,
  });

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const courses = useSelector((state) => state.getCourses);

  useMemo(() => {
    dispatch(getCoursesInRequest(token));
  }, []);

  const newClasses = async (ev) => {
    ev.preventDefault();

    let data = info;

    data = { ...data, module: parseInt(data.module) };
    data = { ...data, course: parseInt(data.course) };

    try {
      await api.post(`/classes/`, info, {
        headers: { Authorization: `Bearer ${token}` },
      });
      Swal.fire("Muito Bem!", "Aula adicionada com sucesso", "success");
      close();
    } catch (err) {
      Swal.fire("Ops!", "Não foi possível adicionar essa aula", "error");
    }
  };

  const getModules = async () => {
    try {
      const response = await api.get(`/modules/${info.course}/course/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setModules(response.data);
    } catch (err) {
      Swal.fire(
        "Ops!",
        "Não foi possível caregar os módulos do curso",
        "error"
      );
    }
  };

  const upload = async (video) => {
    const formData = new FormData();
    formData.append("file", video);

    try {
      const response = await api.post(`/upload`, formData, {
        onDownloadProgress: (progressEvent) => {
          let progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          console.log("progresso ->>>>", progress);
          setProgress(progress);
        },

        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setInfo({ ...info, video: response.data.hash });
      setSucess(true);
    } catch (err) {
      Swal.fire(
        "Ops!",
        "Não foi possível caregar os módulos do curso",
        "error"
      );
    }
  };

  useMemo(() => {
    if (info.course) {
      getModules();
    }
  }, [info]);

  const handleInit = (ev) => {
    console.log("video", ev.target.files[0]);
    upload(ev.target.files[0]);
  };

  return (
    <Modal open={open} close={close} title="Nova Aula">
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <Input
            name="video"
            label="Video"
            placeholder="Digite o nome da aula"
            onChange={handleInit}
            type="file"
            required
          />
          {progress && (
            <SessionProgress>
              <LinearProgress variant="determinate" value={progress} />
              <PercentProgress>{progress}%</PercentProgress>
            </SessionProgress>
          )}
          {sucess && <p>Identificação do vídeo: {info.video}</p>}
        </Grid>
      </Grid>
      <form onSubmit={newClasses}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Input
              name="name"
              label="Nome"
              placeholder="Digite o nome da aula"
              value={info.name}
              onChange={(ev) => setInfo({ ...info, name: ev.target.value })}
              required
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Textarea
              name="description"
              label="Descrição"
              placeholder="Digite a descrição da aula"
              value={info.description}
              onChange={(ev) =>
                setInfo({ ...info, description: ev.target.value })
              }
              required
            />
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
            <Select
              name="module"
              label="Modulo"
              placeholder="Selecione o modulo"
              value={info.module}
              onChange={(ev) => setInfo({ ...info, module: ev.target.value })}
              required
            >
              <option>Selecione o Modulo</option>
              {modules &&
                modules.length &&
                modules.map((data, i) => (
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

export default NewClasse;
