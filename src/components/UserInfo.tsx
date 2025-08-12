import styled from "styled-components";
import profile from "../assets/profile.svg";

const UserInfo = () => {
  return (
    <UserInfoWrapper>
      <img src={profile} />
      <span className="userName">횃불이님</span>
    </UserInfoWrapper>
  );
};

export default UserInfo;
const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: fit-content;
  height: fit-content;
  color: #111111;

  img {
    width: 40px;
    height: 40px;
  }
`;
