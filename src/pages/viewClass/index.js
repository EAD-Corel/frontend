import React, { useMemo, useState } from "react";
import Content from "../../components/content";
import { Center, Title, Body, Description, ImageInfo } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getModulesInRequest } from "../../store/modules/getModules/actions";
import { getVideosInRequest } from "../../store/modules/getVideo/actions";
import { getClassInRequest } from "../../store/modules/getClass/actions";
import QierPlayer from "qier-player";
import Error from "../../assets/svg/error.svg";
import Process from "../../assets/svg/processing.svg";

const ViewClass = ({ ...props }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const videosRender = useSelector((state) => state.getClass.data);

  useMemo(() => {
    dispatch(getClassInRequest(token, props.location.state.data.id));
  }, []);

  useMemo(() => {
    dispatch(getModulesInRequest(token, props.location.state.data.course));
  }, []);

  useMemo(() => {
    dispatch(getVideosInRequest(token, props.location.state.data.video));
  }, []);

  return (
    <>
      {videosRender &&
        videosRender.length &&
        videosRender.map((data, i) => (
          <>
            <Title key={i}>{data.name}</Title>
            <Body>
              <Content>
                <Center>
                  {data.classes &&
                    data.classes.length &&
                    !data.classes[0].error &&
                    !data.classes[0].process && (
                      <QierPlayer
                        key={i}
                        width={740}
                        height={420}
                        language="pt"
                        showVideoQuality={true}
                        themeColor="#868aff"
                        src480p={`http://localhost:4001/${data.classes[0].sd}`}
                        src720p={`http://localhost:4001/${data.classes[0].hd}`}
                        src1080p={`http://localhost:4001/${data.classes[0].fullHD}`}
                      />
                    )}
                  {data.classes &&
                    data.classes.length &&
                    data.classes[0].error && (
                      <>
                        <ImageInfo src={Error} />
                        <p>
                          Esse vídeo está indisponível, houve um erro ao
                          converter vídeo
                        </p>
                      </>
                    )}

                  {data.classes &&
                    data.classes.length &&
                    data.classes[0].process && (
                      <>
                        <ImageInfo src={Process} />
                        <p>
                          Esse vídeo está sendo processado, por favor aguarde.
                        </p>
                      </>
                    )}
                  <Description>{data.description}</Description>
                </Center>
              </Content>
            </Body>
          </>
        ))}
    </>
  );
};

export default ViewClass;
