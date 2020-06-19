import React from "react";
import { Zoom } from "@material-ui/core";
import { signOut } from "../../store/modules/auth/actions";
import { useDispatch } from "react-redux";
import history from "../../services/history";
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
  IconLogout,
  IconAdmin,
  TextToogle,
  FooterTo,
  FlexTo,
  IconPassword,
} from "./styles";

const Toogle = ({ open, user, close }) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signOut());
    close();
  };

  const redirect = (route) => {
    history.push(route);
    close();
  };

  return (
    <Zoom in={open}>
      <BodyToogle>
        <HeaderToogle>
          <ImgProfile />
          <Block>
            <NameUser>{user && user.name && user.name}</NameUser>
            <Flex>
              <EmailUser>{user && user.email && user.email}</EmailUser>
            </Flex>
          </Block>
        </HeaderToogle>
        <ContentToogle>
          <FlexTo onClick={() => redirect("/profile")}>
            <IconUser />
            <TextToogle>Meu Perfil</TextToogle>
          </FlexTo>
          <FlexTo onClick={() => redirect("/alterPassword")}>
            <IconPassword />
            <TextToogle>Trocar Senha</TextToogle>
          </FlexTo>
          {/* <FlexTo>
            <IconConfigTo />
            <TextToogle>Configurações</TextToogle>
          </FlexTo> */}
          {user && user.admin && (
            <FlexTo onClick={() => redirect("/administration")}>
              <IconAdmin />
              <TextToogle>Adminsitração</TextToogle>
            </FlexTo>
          )}
        </ContentToogle>
        <FooterTo>
          <FlexTo onClick={() => logout()}>
            <IconLogout />
            <TextToogle>Sair</TextToogle>
          </FlexTo>
        </FooterTo>
      </BodyToogle>
    </Zoom>
  );
};

export default Toogle;
