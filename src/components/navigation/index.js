import React from "react";
import { Grid } from "@material-ui/core";
import ProfileOptions from "./profileOptions";
import {
  Main,
  Menu,
  Header,
  SessionLogo,
  Logo,
  SubLogo,
  Option,
  IconCourses,
  Text,
  IconConfig,
  IconSupport,
  Children,
} from "./styles";

const NavigationComponent = ({ children }) => {
  return (
    <Main>
      <Grid container>
        <Grid item xs={12} md={3} lg={2}>
          <Menu>
            <SessionLogo>
              <Logo variant="h1">
                Birdie <SubLogo variant="h1">EAD</SubLogo>
              </Logo>
            </SessionLogo>
            <Option>
              <IconCourses />
              <Text>Cursos</Text>
            </Option>
            <Option>
              <IconConfig />
              <Text>Configurações</Text>
            </Option>
            <Option>
              <IconSupport />
              <Text>Suporte</Text>
            </Option>
          </Menu>
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          <Header>
            <Grid container justify="flex-end">
              <Grid item xs={12} md={2} lg={2}>
                <ProfileOptions />
              </Grid>
            </Grid>
          </Header>
          <Children>{children}</Children>
        </Grid>
      </Grid>
    </Main>
  );
};

export default NavigationComponent;
