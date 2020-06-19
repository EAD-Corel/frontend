import styled from "styled-components";
import { Avatar, Typography } from "@material-ui/core";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  AiOutlineCompass,
  AiOutlineTool,
  AiOutlineUser,
  AiOutlineBlock,
  AiOutlineHome,
} from "react-icons/ai";
import { TiSupport } from "react-icons/ti";
import { FiLogOut } from "react-icons/fi";
import { RiAdminLine, RiLockPasswordLine } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ICON = `
  color: inherit !important;
  font-size: 25px !important;
`;

const ICON2 = `
  color: inherit !important;
  font-size: 20px !important;
  margin-bottom: 20px;
`;

export const Main = styled.div`
  background-color: #f5f6fa;
  position: fixed;
  width: 100%;
`;

export const Menu = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #101924;
  overflow: auto;
`;

export const Header = styled.div`
  background-color: #fff;
  padding: 0 22px;
  border-bottom: 1px solid #e5e9f2;
  height: 65px;
  display: flex;
  align-items: center;
`;

export const BodyProfile = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;

export const ImgProfile = styled(Avatar)`
  height: 32px !important;
  width: 32px !important;
`;

export const Block = styled.div`
  display: block;
`;

export const TypeUser = styled(Typography)`
  font-size: 11px !important;
  font-weight: 500 !important;
  line-height: 1 !important;
  padding-top: 0.125rem !important;
  padding-bottom: 0.375rem !important;
  color: #798bff !important;
  margin-left: 16px !important;
`;

export const Flex = styled.div`
  display: flex;
`;

export const Name = styled(Typography)`
  color: #526484 !important;
  font-size: 12px !important;
  line-height: 16px !important;
  font-weight: 700 !important;
  margin-left: 16px !important;
  cursor: pointer;
`;

export const Arrow = styled(MdKeyboardArrowDown)`
  color: #526484 !important;
  font-size: 17px !important;
  line-height: 16px !important;
  font-weight: 700 !important;
  margin-top: -1px !important;
  cursor: pointer;
`;

export const SessionLogo = styled.div`
  border-bottom: 1px solid #3e3e40;
  padding: 14px 24px;
  height: 65px;
  display: flex !important;
  align-items: center;
`;

export const Logo = styled(Typography)`
  display: flex !important;
  color: #fff !important;
  font-weight: 600 !important;
  font-size: 25px !important;
  justify-content: center !important;
`;

export const SubLogo = styled(Typography)`
  display: flex !important;
  color: #868aff !important;
  font-weight: 600 !important;
  font-size: 25px !important;
  margin-left: 3px !important;
`;

export const Option = styled.div`
  color: #6e82a5;
  display: flex;
  padding-left: 24px;
  padding-top: 15px;
  cursor: pointer;

  &:hover {
    color: #6879ff;
  }
`;

export const IconCourses = styled(AiOutlineCompass)`
  ${ICON}
`;

export const IconHome = styled(AiOutlineHome)`
  ${ICON}
`;

export const IconSupport = styled(TiSupport)`
  ${ICON}
`;

export const IconModule = styled(AiOutlineBlock)`
  ${ICON}
`;

export const Text = styled(Typography)`
  color: inherit !important;
  font-size: 19px !important;
  padding-left: 5px !important;
`;

export const Children = styled.div`
  margin: 40px 10px;
  max-height: 90vh;
`;

export const BodyToogle = styled.div`
  position: absolute;
  background-color: #fff;
  margin-top: 11px;
  margin-right: 12px;
  border-top: 3px solid #6576ff;
  width: 280px;
  right: 9px;
  box-shadow: 0 3px 12px 1px rgba(44, 55, 130, 0.15);
  border-radius: 4px;
  z-index: 1004;
`;

export const HeaderToogle = styled.div`
  background-color: #f5f6fa;
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
  padding-left: 20px;
  display: flex;
`;

export const NameUser = styled(Typography)`
  color: #364a63 !important;
  margin-left: 16px !important;
  font-size: 0.875rem !important;
  font-weight: 700 !important;
  margin-top: -3px !important;
`;

export const EmailUser = styled(Typography)`
  color: #8094ae !important;
  margin-left: 16px !important;
  font-size: 12px !important;
  font-weight: 400 !important;
`;

export const ContentToogle = styled.div`
  border-top: 1px solid #e5e9f2;
  padding-left: 20px;
  padding-top: 1.125rem;
  padding-bottom: 0.1rem;
`;

export const IconUser = styled(AiOutlineUser)`
  ${ICON2}
`;

export const IconPassword = styled(RiLockPasswordLine)`
  ${ICON2}
`;

export const IconConfigTo = styled(AiOutlineTool)`
  ${ICON2}
`;

export const IconLogout = styled(FiLogOut)`
  ${ICON2}
`;

export const IconAdmin = styled(RiAdminLine)`
  ${ICON2}
`;

export const TextToogle = styled(Typography)`
  color: inherit !important;
  font-size: 13px !important;
  line-height: 1.4rem !important;
  font-weight: 500 !important;
  margin-left: 8px !important;
`;

export const FooterTo = styled.div`
  padding-left: 20px;
  padding-top: 1.125rem;
  padding-bottom: 0.1rem;
  border-top: 1px solid #e5e9f2;
`;

export const FlexTo = styled.div`
  display: flex;
  color: #526484 !important;
  cursor: pointer;

  &:hover {
    color: #868aff !important;
  }
`;

export const Option2 = styled.div`
  color: #6e82a5;
  display: flex;
  padding-left: 40px;
  padding-top: 10px;
  cursor: pointer;

  &:hover {
    color: #6879ff;
  }
`;

export const IconClass = styled(IoIosCloseCircleOutline)`
  color: inherit !important;
  font-size: 12px !important;
  margin-top: 3px !important;
`;

export const TextClass = styled(Typography)`
  font-weight: 400 !important;
  font-size: 12px !important;
  letter-spacing: normal !important;
  text-transform: none !important;
  line-height: 1.25rem !important;
  color: inherit !important;
  padding-left: 5px !important;
`;
