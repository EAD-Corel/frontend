import React, { useState } from "react";
import Toogle from "./toogle";
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

  return (
    <>
      <BodyProfile onClick={() => setOpen(!open)}>
        <ImgProfile />
        <Block>
          <TypeUser>Administrador</TypeUser>
          <Flex>
            <Name>Rafael</Name>
            <Arrow />
          </Flex>
        </Block>
      </BodyProfile>
      <Toogle open={open} />
    </>
  );
};

export default ProfileOptions;
