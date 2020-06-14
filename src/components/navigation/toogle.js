import React from "react";
import { Zoom } from "@material-ui/core";
import {
  BodyToogle,
  HeaderToogle,
  ImgProfile,
  Block,
  NameUser,
  Flex,
  EmailUser,
  ContentToogle,
  IconUser,
  IconConfigTo,
  IconLogout,
  IconAdmin,
  TextToogle,
  FooterTo,
  FlexTo,
} from "./styles";

const Toogle = ({ open }) => {
  return (
    <Zoom in={open}>
      <BodyToogle>
        <HeaderToogle>
          <ImgProfile />
          <Block>
            <NameUser>Rafael Menon</NameUser>
            <Flex>
              <EmailUser>rafael13rodrigo@gmail.com</EmailUser>
            </Flex>
          </Block>
        </HeaderToogle>
        <ContentToogle>
          <FlexTo>
            <IconUser />
            <TextToogle>Meu Perfil</TextToogle>
          </FlexTo>
          <FlexTo>
            <IconConfigTo />
            <TextToogle>Configurações</TextToogle>
          </FlexTo>
          <FlexTo>
            <IconAdmin />
            <TextToogle>Adminsitração</TextToogle>
          </FlexTo>
        </ContentToogle>
        <FooterTo>
          <FlexTo>
            <IconLogout />
            <TextToogle>Sair</TextToogle>
          </FlexTo>
        </FooterTo>
      </BodyToogle>
    </Zoom>
  );
};

export default Toogle;
