import React, { useMemo } from "react";
import { getModulesInRequest } from "../../store/modules/getModules/actions";
import { useDispatch, useSelector } from "react-redux";
import { getWarningsInRequest } from "../../store/modules/getWarning/actions";
import Warning from "../../components/warning";
import Title from "../../components/title";

const Course = ({ ...props }) => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const warnings = useSelector((state) => state.getWarnings);

  useMemo(() => {
    if (props && props.location && props.location.state) {
      dispatch(getModulesInRequest(token, props.location.state.id));
    }
  }, []);

  useMemo(() => {
    dispatch(getWarningsInRequest(token, props.location.state.id));
  }, []);

  useMemo(() => {
    console.log("warnings", warnings);
  }, [warnings]);

  return (
    <>
      <Title title={`Curso ${props.location.state.name}`} />
      {warnings &&
        warnings.data &&
        warnings.data.length ?
        warnings.data.map((data, i) => (
          <Warning title={data.title} subtitle={data.text} />
        ))
        : <p>Esse curso não possui nenhum recado no momento!</p> }
    </>
  );
};

export default Course;
