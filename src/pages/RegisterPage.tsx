import styled from "styled-components";
import Header from "../components/Header.tsx";
import LoginImg from "../assets/loginimg.svg";
import Button from "../components/Button.tsx";
import StyledInput from "../components/StyledInput.tsx";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <RegisterPageWrapper>
      <Header />
      <Box>
        <LeftArea src={LoginImg}></LeftArea>
        <RightArea>
          <TitleArea>회원가입</TitleArea>
          <FormArea>
            <h3>아이디</h3>
            <StyledInput placeholder={"아이디를 입력하세요."} />
            <h3>비밀번호</h3>
            <StyledInput placeholder={"비밀번호를 입력하세요."} />
            <h3>이름</h3>
            <StyledInput placeholder={"이름을 입력하세요."} />
            <h3>전화번호</h3>
            <StyledInput placeholder={"전화번호를 입력하세요."} />
            <h3>기수</h3>
            <StyledInput />
            <h3>파트</h3>
            <StyledInput />
          </FormArea>
          <ButtonArea>
            <Button
              buttonName={"회원가입"}
              onClick={() => {
                navigate("/login");
              }}
            />
          </ButtonArea>
          <HelpArea>
            아직 계정이 없으신가요? <span className="goregister">회원가입</span>
          </HelpArea>
        </RightArea>
      </Box>
    </RegisterPageWrapper>
  );
};
export default RegisterPage;

const RegisterPageWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 100px 30px 60px 30px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 100px;

  background-color: #fafafa;
`;
const Box = styled.div`
  width: 1096px;
  min-height: 600px;
  height: fit-content;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

const LeftArea = styled.img`
  //height: 100%;
  width: 50%;
  object-fit: cover;
`;
const RightArea = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;

  padding: 30px 60px 20px 60px;
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
  h3 {
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
  line-height: 17px;

  color: #000000;

  .goregister {
    color: #00499b;
    cursor: pointer;
  }
`;
