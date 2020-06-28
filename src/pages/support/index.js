import React, { useState, useMemo } from "react";
import Input from "../../components/input";
import Content from "../../components/content";
import Textarea from "../../components/textarea";
import Button from "../../components/button";
import { Spacig, SessionBtn } from "./styles";
import { useSelector } from "react-redux";
import api from "../../services/api";
import Swal from "sweetalert2";
import Loading from "../../components/loading";

const Support = () => {
  const user = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    subject: null,
    to: user && user.data ? user.data.email : null,
    text: null,
  });

  const token = useSelector((state) => state.auth.token);

  const send = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    try {
      await api.post(`/support`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoading(false);
      Swal.fire(
        "E-mail enviado com sucesso",
        "Aguarde que o professor irá responder o mais rápido possível",
        "success"
      );
    } catch (err) {
      setLoading(false);
      Swal.fire("Ops", "Desculpe, não foi possível enviar o email", "error");
    }
  };

  useMemo(() => {
    console.log("user ->", user);
  }, [user]);

  return (
    <>
      <Content>
        {!loading ? (
          <form onSubmit={send}>
            <Input
              name="title"
              label="Assunto"
              placeholder="Digite o assunto do suporte"
              value={data.subject}
              onChange={(ev) => setData({ ...data, subject: ev.target.value })}
            />
            <Spacig />
            <Textarea
              name="mensagem"
              label="Mensagem"
              placeholder="Digite a sua dúvida"
              value={data.text}
              onChange={(ev) => setData({ ...data, text: ev.target.value })}
            />
            <Spacig />
            <SessionBtn>
              <Button label="Enviar" color="primary" type="submit" />
            </SessionBtn>
          </form>
        ) : (
          <Loading />
        )}
      </Content>
    </>
  );
};

export default Support;
