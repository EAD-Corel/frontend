import React from "react";
import Input from "../../components/input";
import Content from "../../components/content";
import Textarea from "../../components/textarea";
import Button from "../../components/button";
import { Spacig, SessionBtn } from "./styles";

const Support = () => {
  return (
    <>
      <Content>
        <Input
          name="title"
          label="Assunto"
          placeholder="Digite o assunto do suporte"
        />
        <Spacig />
        <Input
          name="curso"
          label="Curso"
          placeholder="Sobre qual curso você precisa de ajuda?"
        />
        <Spacig />
        <Textarea
          name="mensagem"
          label="Mensagem"
          placeholder="Digite a sua dúvida"
        />
        <Spacig />
        <SessionBtn>
          <Button label="Enviar" color="primary" />
        </SessionBtn>
      </Content>
    </>
  );
};

export default Support;
