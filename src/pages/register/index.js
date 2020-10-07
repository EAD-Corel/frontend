import React, { useState, useEffect } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import Alert from "../../components/alert";
import { useSelector, useDispatch } from "react-redux";
import api from "../../services/api";
import Swal from "sweetalert2";
import history from "../../services/history";
import {
  Main,
  Body,
  Logo,
  SubLogo,
  Title,
  SubTitle,
  Spacing,
  Account,
  Copy,
  Icon1,
  Icon2,
} from "./styles";

const Login = () => {
  const [error, setError] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onSubmit = (ev) => {
    ev.preventDefault();

    const data = {
      name,
      email,
      password,
      confirmPassword,
      telefone,
    };

    try {
      api.post("/user", data);
      Swal.fire(
        "Muito bem",
        "Seu cadastrado foi realizado com sucesso",
        "success"
      );
      history.push("/login");
    } catch (err) {
      Swal.fire("Ops!", "Não foi possível criar seu cadastro!", "error");
    }
  };

  useEffect(() => {
    if (auth.signedFailured && !auth.signed && !auth.loading) {
      setError(true);
    } else {
      setError(false);
    }
  }, [auth]);

  return (
    <>
      <Main>
        <form onSubmit={onSubmit}>
          <Body>
            <Logo variant="h1">
              Birdie <SubLogo variant="h1">EAD</SubLogo>
            </Logo>
            <Title variant="h5">Entrar</Title>
            <SubTitle>Preencha com suas informações</SubTitle>
            <Input
              name="name"
              label="Nome"
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              required
            />
            <Spacing />
            <Input
              name="email"
              label="E-mail"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              required
            />
            <Spacing />
            <Input
              name="phone"
              label="Telefone"
              type="number"
              placeholder="Digite seu telefone"
              value={telefone}
              onChange={(ev) => setTelefone(ev.target.value)}
              required
            />
            <Spacing />
            <Input
              name="senha"
              label="Senha"
              type="password"
              placeholder="Digite sua Senha"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              required
            />
            <Spacing />
            <Input
              name="confirmPassword"
              label="Confirme a senha"
              type="password"
              placeholder="Repita a senha"
              value={confirmPassword}
              onChange={(ev) => setConfirmPassword(ev.target.value)}
              required
            />
            <Button
              label="Login"
              color="primary"
              type="submit"
              margin="21px 0"
            />
            <Account onClick={() => history.push("/login")}>
              Já possui conta? Faça login!
            </Account>
            <Copy>
              Desenvolvido com <Icon1 /> e muito <Icon2 /> por Rafael Menon
            </Copy>
          </Body>
        </form>
      </Main>
      <Alert
        open={error}
        close={() => setError(false)}
        severity="error"
        message="Ops, parece que você errou o usuário ou a senha."
      />
    </>
  );
};

export default Login;
