import React, { useState, useMemo } from "react";
import Input from "../../components/input";
import Content from "../../components/content";
import Button from "../../components/button";
import { Spacig, SessionBtn } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import api from "../../services/api";
import Swal from "sweetalert2";
import { signOut } from "../../store/modules/auth/actions";
import FileBase64 from "react-file-base64";

const Profile = () => {
  const user = useSelector((state) => state.user.data);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({
    name: user && user.name ? user.name : null,
    email: user && user.email ? user.email : null,
    telefone: user && user.telefone ? user.telefone : null,
    avatar: null,
  });

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const updateUser = async (ev) => {
    ev.preventDefault();

    try {
      await api.put(`/users/${user.id}`, info, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoading(false);
      Swal.fire(
        "Muito Bem!",
        "Você precisará efetuar login novamente",
        "success"
      );
    } catch (err) {
      console.log(err);
    }
  };

  const getImage = (ev) => {
    console.log(ev);
    setInfo({ ...info, avatar: ev.base64 });
  };

  return (
    <>
      <Content>
        <form onSubmit={updateUser}>
          <Input
            name="name"
            label="Nome"
            placeholder="Digite o nome que deseja Exibir"
            value={info.name}
            onChange={(ev) => setInfo({ ...info, name: ev.target.value })}
            required
          />
          <Spacig />
          <Input
            name="email"
            label="E-mail"
            placeholder="Qual seu email de cadastro?"
            value={info.email}
            onChange={(ev) => setInfo({ ...info, email: ev.target.value })}
            type="email"
            required
          />
          <Spacig />
          <Input
            name="phone"
            label="Telefone"
            placeholder="Qual seu telefone?"
            value={info.telefone}
            onChange={(ev) => setInfo({ ...info, telefone: ev.target.value })}
            required
          />
          <Spacig />
          <FileBase64 multiple={false} onDone={getImage} />

          <Spacig />
          <SessionBtn>
            <Button label="Salvar" color="primary" type="submit" />
          </SessionBtn>
        </form>
      </Content>
    </>
  );
};

export default Profile;
