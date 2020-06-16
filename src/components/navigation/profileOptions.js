import React, { useState, useMemo } from "react";
import Toogle from "./toogle";
import { useSelector } from "react-redux";
import api from "../../services/api";
import {
  BodyProfile,
  ImgProfile,
  Block,
  TypeUser,
  Flex,
  Name,
  Arrow,
} from "./styles";

const ProfileOptions = () => {
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const user = useSelector((state) => state.user.data);
  const token = useSelector((state) => state.auth.token);

  const getUser = async () => {
    try {
      const response = await api.get(`/users/${user.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      response.data.user.map((data) => {
        setAvatar(data.avatar);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useMemo(() => {
    getUser();
  }, []);

  return (
    <>
      <BodyProfile onClick={() => setOpen(!open)}>
        <ImgProfile src={avatar ? avatar : null} />
        <Block>
          <TypeUser>{user && user.admin ? "Administrador" : "Aluno"}</TypeUser>
          <Flex>
            <Name>{user && user.name && user.name} </Name>
            <Arrow />
          </Flex>
        </Block>
      </BodyProfile>
      <Toogle open={open} user={user} close={() => setOpen(false)} />
    </>
  );
};

export default ProfileOptions;
