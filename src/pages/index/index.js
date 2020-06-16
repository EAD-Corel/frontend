import React from "react";
import Content from "../../components/content";
import {
  Body,
  Title,
  SubTitle,
  Type,
  Grey,
  Logo,
  SubLogo,
  White,
} from "./styles";

const Index = () => {
  return (
    <Body>
      <Title>Seja muito bem vindo(a)</Title>
      <SubTitle>
        Antes que você inicie seus estudos, temos um recado para você, sempre
        visualize essa página pois aqui iremos colocar as informações mais
        importantes sobre a plataforma de estudo.
      </SubTitle>
      <Content>
        <Type>Aviso sobre a plataforma</Type>
        <Grey>
          <Logo variant="h1">
            Birdie <SubLogo variant="h1">EAD</SubLogo>
          </Logo>
          <White>
            <strong>Olá, tudo bem?</strong> <br />
            <p>
              Sei que você está mega empolgado(a) para iniciar seus estudos,
              estou certo? Porém gostaria apenas de deixar um aviso a você.
            </p>
            <p>
              Essa plataforma é nova e está em fase de testes, com isso a
              plataforma poderá sofrer alterações ao decorrer do tempo, sendo
              implementado melhorias e correções. Então você poderá encontrar
              algum problema durante o uso, pedimos que caso isso acorra nos
              avise para que possamos imediatamente corrigir.
            </p>
            <p>
              Nós sempre estamos fazendo testes e fazendo validações para que
              você tenha a melhor experiência possível nos estudos, mas nem
              sempre conseguimos encontrar todos os problemas.
            </p>
            <p>
              Por isso qualquer problema entre em contato conosco ok? Muito
              obrigado e desejo a você um ótimo estudo.
            </p>
            <p>---</p>
            <p>Atenciosamente Rafael Menon.</p>
          </White>
        </Grey>
      </Content>
    </Body>
  );
};

export default Index;
