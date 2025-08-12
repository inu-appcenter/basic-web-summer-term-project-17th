import styled from "styled-components";
import Headers from "../components/Header";
import Loginimg from "../assets/loginimg.svg";
import Button from "../components/Button";
import StyledInput from "../components/Styledinput";
import { useNavigate } from "react-router-dom";

const Loginpages = () => {
  const navigate = useNavigate();

  return (
    <LoginpagesWrapper>
      <Headers />

      <Box>
        <LeftArea src={Loginimg}></LeftArea>
        <RightArea>
          <TitleLine>로그인</TitleLine>
          <FormArea>
            <h3>아이디</h3>
            <StyledInput placeholder={"아이디를 입력하세요."} />
            <h3>비밀번호</h3>
            <StyledInput placeholder={"비밀번호를 입력하세요"} />
          </FormArea>

          <ButtonArea>
            <Button
              ButtonName={"로그인"}
              onClick={() => {
                navigate("/");
              }}
            />
          </ButtonArea>

          <HelpArea>
            {"계정이 없으신가요?"}
            <span className="goregister">회원가입</span>
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
