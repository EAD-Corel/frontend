import React, { useState } from "react";
import { Grid, Collapse } from "@material-ui/core";
import ProfileOptions from "./profileOptions";
import { useSelector, useDispatch } from "react-redux";
import history from "../../services/history";
import { cleanModules } from "../../store/modules/getModules/actions";
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
  IconHome,
  IconSupport,
  Children,
  IconModule,
  Option2,
  IconClass,
  TextClass,
  GridMenu,
} from "./styles";

const NavigationComponent = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState(null);

  const dispatch = useDispatch();
  const modules = useSelector((state) => state.getModules);

  const collapseClass = (key) => {
    setOpen(!open);
    setKey(key);
  };

  const pushLession = (data) => {
    history.push("/view", { data });
  };

  const redirect = (route) => {
    dispatch(cleanModules());
    history.push(route);
  };

  return (
    <Main>
      <Grid container>
        <GridMenu item xs={12} md={3} lg={2}>
          <Menu>
            <SessionLogo onClick={() => redirect("/")}>
              <Logo variant="h1">
                Birdie <SubLogo variant="h1">EAD</SubLogo>
              </Logo>
            </SessionLogo>
            {modules && !modules.data && (
              <>
                <Option onClick={() => redirect("/")}>
                  <IconHome />
                  <Text>Início</Text>
                </Option>
                <Option onClick={() => redirect("/courses")}>
                  <IconCourses />
                  <Text>Cursos</Text>
                </Option>
                <Option onClick={() => redirect("/support")}>
                  <IconSupport />
                  <Text>Suporte</Text>
                </Option>
              </>
            )}
            {modules && modules.data && (
              <Option onClick={() => redirect("/")}>
                <IconHome />
                <Text>Voltar ao ínicio</Text>
              </Option>
            )}
            {modules &&
              modules.data &&
              modules.data.map((data, i) => (
                <>
                  <Option key={i} onClick={() => collapseClass(i)}>
                    <IconModule />
                    <Text>{data.name}</Text>
                  </Option>
                  {data.classes.map((data, index) => (
                    <Collapse in={key === i ? open : false}>
                      <Option2 key={index} onClick={() => pushLession(data)}>
                        <IconClass />
                        <TextClass>{data.name}</TextClass>
                      </Option2>
                    </Collapse>
                  ))}
                </>
              ))}
          </Menu>
        </GridMenu>
        <Grid item xs={12} md={9} lg={10} style={{ overflow: "auto" }}>
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
