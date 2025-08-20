import styled from "styled-components";
import Header from "../components/Header";
import LoginImg from "../assets/loginimg.svg";
import Button from "../components/Button";
import StyledInput from "../components/StyledInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Registpage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [part, setPart] = useState("");
  const [gen, setGen] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");

  const baseURL = import.meta.env.VITE_BASE_URL;
  const handleRegist = async () => {
    try {
      if (
        !email.trim() ||
        !password.trim() ||
        !name.trim() ||
        !part.trim() ||
        !gen ||
        !phoneNumber.trim()
      ) {
        alert("빈칸 없이 입력해주세요.");
        return;
      }
      console.log(email, password, name, part, gen, phoneNumber);
      const response = await fetch(`${baseURL}/api/users/auth/sign-up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name, part, gen, phoneNumber }),
      });
      if (!response.ok) {
        throw new Error("회원가입에 실패했습니다.");
      }
      alert("회원가입 성공!");

      navigate("/");
    } catch (error) {
      alert((error as Error).message);
    }
  };
  return (
    <LoginPageWrapper>
      <Header />
      <Box>
        <LeftArea src={LoginImg}></LeftArea>
        <RightArea>
          <TitleArea>회원가입</TitleArea>
          <FormArea>
            <h3>아이디</h3>
            <StyledInput
              placeholder={"아이디를 입력하세요."}
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            ></StyledInput>
            <h3>비밀번호</h3>
            <StyledInput
              placeholder={"비밀번호를 입력하세요."}
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            ></StyledInput>
            <h3>이름</h3>
            <StyledInput
              placeholder={"이름을 입력하세요."}
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            ></StyledInput>
            <h3>전화번호</h3>
            <StyledInput
              placeholder={"010-1234-1234"}
              value={phoneNumber}
              onChange={(e: any) => setPhoneNumber(e.target.value)}
            ></StyledInput>
            <h3>기수</h3>
            <StyledInput
              placeholder={"기수를 입력하세요."}
              value={gen}
              onChange={(e: any) => setGen(e.target.value)}
            ></StyledInput>
            <h3>파트</h3>
            <StyledInput
              placeholder={"파트를 입력하세요."}
              value={part}
              onChange={(e: any) => setPart(e.target.value)}
            ></StyledInput>
          </FormArea>
          <ButtonArea>
            <Button buttonName={"회원가입"} onClick={handleRegist} />
          </ButtonArea>
        </RightArea>
      </Box>
    </LoginPageWrapper>
  );
};
export default Registpage;

const LoginPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 30px 60px 30px;
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
  height: fit-content;
  display: flex;
  flex-direction: row;
`;
const LeftArea = styled.img`
  width: 50%;
  //height: 100%;
  object-fit: cover;
`;
const RightArea = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  padding: 30px 60px 30px 60px;
  box-sizing: border-box;
`;
const TitleArea = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #454545;
`;
const FormArea = styled.div`
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #00499b;
`;
const ButtonArea = styled.div``;
