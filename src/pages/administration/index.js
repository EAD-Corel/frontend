import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Header, Title, SubTitle, Right, SessionBtn } from "./styles";
import Button from "../../components/button";
import ListCourses from "./listCourses";
import NewCourse from "./newCourse";
import NewStudenty from "./newStudenty";
import NewClasse from "./newClasse";
import NewEnrollments from "./newEnrollments";
import NewModule from "./newModule";

const Adminstration = () => {
  const [newStudent, setNewStudent] = useState(false);
  const [newCourse, setNewCourse] = useState(false);
  const [newClasse, setNewClasse] = useState(false);
  const [newEnrollment, setNewEnrollment] = useState(false);
  const [newModule, setNewModule] = useState(false);

  return (
    <>
      <Header>
        <Grid container>
          <Grid item xs={12} md={7} lg={7}>
            <Title>Administração</Title>
            <SubTitle>
              Aqui você poderá administrar os cursos e alunos.
            </SubTitle>
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <Right>
              <SessionBtn>
                <Button
                  label="Novo Curso"
                  color="primary"
                  onClick={() => setNewCourse(true)}
                />
              </SessionBtn>
              <SessionBtn>
                <Button
                  label="Novo Aluno"
                  color="secondary"
                  onClick={() => setNewStudent(true)}
                />
              </SessionBtn>
              <SessionBtn>
                <Button
                  label="Nova Aula"
                  color="primary"
                  onClick={() => setNewClasse(true)}
                />
              </SessionBtn>
              <SessionBtn>
                <Button
                  label="Matricula"
                  color="secondary"
                  onClick={() => setNewEnrollment(true)}
                />
              </SessionBtn>
              <SessionBtn>
                <Button
                  label="Modulo"
                  color="primary"
                  onClick={() => setNewModule(true)}
                />
              </SessionBtn>
            </Right>
          </Grid>
        </Grid>
        <ListCourses />
      </Header>
      <NewCourse open={newCourse} close={() => setNewCourse(false)} />
      <NewStudenty open={newStudent} close={() => setNewStudent(false)} />
      <NewClasse open={newClasse} close={() => setNewClasse(false)} />
      <NewModule open={newModule} close={() => setNewModule(false)} />
      <NewEnrollments
        open={newEnrollment}
        close={() => setNewEnrollment(false)}
      />
    </>
  );
};

export default Adminstration;
