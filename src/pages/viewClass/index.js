import React, { useMemo, useState } from "react";
import Content from "../../components/content";
import { Center, Title, Body, Description } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getModulesInRequest } from "../../store/modules/getModules/actions";
import QierPlayer from "qier-player";

const ViewClass = ({ ...props }) => {
  useMemo(() => {
    console.log("->>>>>", props);
  }, [props]);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useMemo(() => {
    dispatch(getModulesInRequest(token, props.location.state.data.course));
  }, []);

  return (
    <>
      <Title>{props.location.state.data.name}</Title>
      <Body>
        <Content>
          <Center>
            <QierPlayer
              width={740}
              height={420}
              language="pt"
              showVideoQuality={false}
              themeColor="#868aff"
              srcOrigin={`https://api.coreldrawiniciante.com.br:4001/video/${props.location.state.data.video}`}
            />
            <Description>{props.location.state.data.description}</Description>
          </Center>
        </Content>
      </Body>
    </>
  );
};

export default ViewClass;
