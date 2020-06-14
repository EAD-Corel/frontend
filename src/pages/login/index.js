import React, { useState, useEffect } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import Alert from "../../components/alert";
import { useSelector, useDispatch } from "react-redux";
import { signInRequest } from "../../store/modules/auth/actions";
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
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onSubmit = (ev) => {
    ev.preventDefault();

    if (email && password) {
      dispatch(signInRequest(email, password));
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
            <SubTitle>Seja bem vindo(a). Faça login para continuar.</SubTitle>
            <Input
              name="email"
              label="E-mail"
              subLabel="Não lembra o e-mail?"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              required
            />
            <Spacing />
            <Input
              name="senha"
              label="Senha"
              subLabel="Esqueceu a senha?"
              type="password"
              placeholder="Digite sua Senha"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              required
            />
            <Button
              label="Login"
              color="primary"
              type="submit"
              margin="21px 0"
            />
            <Account>Ainda não possui uma conta?</Account>
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
