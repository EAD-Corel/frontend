import React, { useState } from "react";
import Modal from "../../components/modal";
import { Grid } from "@material-ui/core";
import Input from "../../components/input";
import Button from "../../components/button";
import { useSelector } from "react-redux";
import { SessionBtn } from "./styles";
import api from "../../services/api";
import Swal from "sweetalert2";

const NewStudenty = ({ open, close }) => {
  const [info, setInfo] = useState({
    name: null,
    email: null,
    telefone: null,
    registration_date: new Date(),
    password: null,
    confirmPassword: null,
  });

  const token = useSelector((state) => state.auth.token);

  const newStudendy = async (ev) => {
    ev.preventDefault();

    try {
      await api.post(`/users/`, info, {
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
      <form onSubmit={newStudendy}>
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
            <Input
              name="email"
              label="Email"
              placeholder="Esse email será utilizado para logar na plataforma"
              value={info.email}
              onChange={(ev) => setInfo({ ...info, email: ev.target.value })}
              required
              type="email"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Input
              name="telefone"
              label="Telefone"
              placeholder="Telefone do aluno"
              value={info.telefone}
              onChange={(ev) => setInfo({ ...info, telefone: ev.target.value })}
              required
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Input
              name="password"
              label="Senha"
              placeholder="Digite a senha"
              value={info.password}
              onChange={(ev) => setInfo({ ...info, password: ev.target.value })}
              required
              type="password"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Input
              name="confirmPassword"
              label="Confirmação da senha"
              placeholder="Digite novamente a senha"
              value={info.confirmPassword}
              onChange={(ev) =>
                setInfo({ ...info, confirmPassword: ev.target.value })
              }
              required
              type="password"
            />
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

export default NewStudenty;
