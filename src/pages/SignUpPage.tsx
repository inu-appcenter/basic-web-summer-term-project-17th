import styled from "styled-components";
import Headers from "../components/Header";
import Loginimg from "../assets/loginimg.svg";
import Button from "../components/Button";
import StyledInput from "../components/Styledinput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signuppages = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [part, setpart] = useState("");
  const [generation, setgeneration] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const baseURL = import.meta.env.VITE_BASE_URL;

  const handleSignup = async () => {
    try {
      if (
        !email.trim() ||
        !password.trim() ||
        !name.trim() ||
        !part.trim() ||
        !generation.trim() ||
        !phoneNumber.trim()
      ) {
        alert("회원정보를 입력하세요.");
        return;
      }

      console.log(email, password, name, part, generation, phoneNumber);
      const response = await fetch(`${baseURL}/api/auth/sign-up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name,
          part,
          generation,
          phoneNumber,
        }),
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
    <SigninpagesWrapper>
      <Headers />

      <Box>
        <LeftArea src={Loginimg}></LeftArea>
        <RightArea>
          <TitleLine>회원가입</TitleLine>
          <FormArea>
            <h3>아이디</h3>
            <StyledInput
              placeholder={"아이디를 입력하세요."}
              value={email}
              onChange={(e: any) => setemail(e.target.value)}
            />
            <h3>비밀번호</h3>
            <StyledInput
              placeholder={"비밀번호를 입력하세요"}
              value={password}
              onChange={(e: any) => setpassword(e.target.value)}
            />
            <h3>이름</h3>
            <StyledInput
              placeholder={"이름를 입력하세요"}
              value={name}
              onChange={(e: any) => setname(e.target.value)}
            />
            <h3>전화번호</h3>
            <StyledInput
              placeholder={"010-1234-5678"}
              value={phoneNumber}
              onChange={(e: any) => setphoneNumber(e.target.value)}
            />
            <h3>기수</h3>
            <StyledInput
              placeholder={"17"}
              value={generation}
              onChange={(e: any) => setgeneration(e.target.value)}
            />
            <h3>파트</h3>
            <StyledInput
              placeholder={"Web"}
              value={part}
              onChange={(e: any) => setpart(e.target.value)}
            />
          </FormArea>

          <ButtonArea>
            <Button ButtonName={"회원가입"} onClick={handleSignup} />
          </ButtonArea>

          <HelpArea>
            {" "}
            <span className="goregister">회원가입</span>
          </HelpArea>
        </RightArea>
      </Box>
    </SigninpagesWrapper>
  );
};

export default Signuppages;

const SigninpagesWrapper = styled.div`
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
  min-height: 600px;
  height: fit-content;

  display: flex;
  flex-direction: row;

  background-color: white;
`;

const LeftArea = styled.img.attrs({
  src: Loginimg,
})`
  width: 50%;
  object-fit: cover;
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
    width: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #00499b;
  }
`;
const ButtonArea = styled.div``;
const HelpArea = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: #000000;

  .goregister {
    color: #00499b;
    cursor: pointer;
  }
`;
