import React, { useState } from "react";
import Content from "../../components/content";
import Input from "../../components/input";
import Button from "../../components/button";
import { Spacig, SessionBtn } from "./styles";
import api from "../../services/api";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const AlterPassword = () => {
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const user = useSelector((state) => state.user.data);
  const token = useSelector((state) => state.auth.token);

  const updatePassword = async (ev) => {
    ev.preventDefault();

    if (password === confirmPassword) {
      const data = {
        password,
        confirmPassword,
      };

      try {
        await api.put(`/user/${user.id}/changePassword`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
        Swal.fire("Muito Bem!", "Senha alterada com suceso", "success");
      } catch (err) {
        Swal.fire("Ops!", "Não consegui alterar seu senha :/", "error");
      }
    } else {
      Swal.fire("Ops!", "As senhas estão diferentes", "error");
    }
  };

  return (
    <Content>
      <form onSubmit={updatePassword}>
        <Input
          name="password"
          label="Senha"
          placeholder="Digite sua nova senha"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          required
        />
        <Spacig />
        <Input
          name="confirmPassword"
          label="Confirmação da senha"
          placeholder="Digite novamente sua senha"
          value={confirmPassword}
          onChange={(ev) => setConfirmPassword(ev.target.value)}
          type="password"
          required
        />
        <Spacig />

        <SessionBtn>
          <Button label="Alterar" color="primary" type="submit" />
        </SessionBtn>
      </form>
    </Content>
  );
};

export default AlterPassword;
