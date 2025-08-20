import styled from "styled-components";
import appcenterlogo from "../assets/appcenterlogo.svg";
import UserInfo from "./UserInfo";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <LeftArea>
        <img
          src={appcenterlogo}
          alt="App Center Logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
        <button onClick={() => navigate("/login")}>로그인</button>
        <button onClick={() => navigate("/memberlist")}>회원 목록</button>
        <button onClick={() => navigate("/submission")}>과제 제출</button>
      </LeftArea>

      <RightArea>
        <UserInfo />
      </RightArea>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 72px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 30px;
  box-sizing: border-box;

  position: fixed;
  top: 0;
  left: 0;
`;

const LeftArea = styled.div`
  display: flex;
  gap: 20px;

  button {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.05em;

    color: #454545;

    background: none;
    border: none;

    cursor: pointer;
  }
`;

const RightArea = styled.div`
  background-color: white;
`;
