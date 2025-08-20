import styled from "styled-components";
import Headers from "../components/Header";
import Loginimg from "../assets/loginimg.svg";
import Button from "../components/Button";
import StyledInput from "../components/Styledinput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Loginpages = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  interface User {
    userName: string;
    grantType: string;
    accessToken: string;
    refreshToken: string;
  }

  const baseURL = import.meta.env.VITE_BASE_URL;

  const handlelogin = async () => {
    try {
      if (!email.trim() || !password.trim()) {
        alert("아이디와 비밀번호를 입력하세요.");
        return;
      }
      const response = await fetch(`${baseURL}/api/auth/sign-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("서버 응답:", errorText);
        throw new Error("로그인에 실패했습니다.");
      }

      const userData: User = await response.json();

      localStorage.setItem("accessToken", userData.accessToken);
      localStorage.setItem("refreshToken", userData.refreshToken);
      localStorage.setItem("name", userData.userName);

      alert("로그인 성공!");
      navigate("/");
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <LoginpagesWrapper>
      <Headers />

      <Box>
        <LeftArea src={Loginimg}></LeftArea>
        <RightArea>
          <TitleLine>로그인</TitleLine>
          <FormArea>
            <h3>이메일</h3>
            <StyledInput
              placeholder={"이메일을 입력하세요."}
              value={email}
              onChange={(e: any) => setemail(e.target.value)}
            />
            <h3>비밀번호</h3>
            <StyledInput
              placeholder={"비밀번호를 입력하세요"}
              value={password}
              onChange={(e: any) => setpassword(e.target.value)}
            />
          </FormArea>

          <ButtonArea>
            <Button ButtonName={"로그인"} onClick={handlelogin} />
          </ButtonArea>

          <HelpArea>
            계정이 없으신가요?{" "}
            <span className="goregister" onClick={() => navigate("/signup")}>
              회원가입
            </span>
          </HelpArea>
        </RightArea>
      </Box>
    </LoginpagesWrapper>
  );
};

export default Loginpages;

const LoginpagesWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 100px 30px 200px 30px; //padding-bottom 작게하면 잘림..
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;

  background-color: #fafafa;
`;

const Box = styled.div`
  width: 1096px;
  height: 600px;

  display: flex;
  flex-direction: row;

  background-color: white;
`;

const LeftArea = styled.img.attrs({
  src: Loginimg,
})`
  width: 50%;
  height: 100%;
`;

const RightArea = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;

  padding: 30px 60px 20px 60px;
  box-sizing: border-box;
`;

const TitleLine = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #000000;
`;
const FormArea = styled.div`
  width: 100%;

  h3 {
    font-style: normal;
    width: 100%;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #00499b;
  }
`;
const ButtonArea = styled.div`
  /* background: #00499b; */
`;

const HelpArea = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;

  .goregister {
    color: #00499b;
    cursor: pointer;
  }
`;
