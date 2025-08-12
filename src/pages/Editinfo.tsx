import styled from "styled-components";
import Headers from "../components/Header";
import Loginimg from "../assets/loginimg.svg";
import Button from "../components/Button";
import StyledInput from "../components/Styledinput";
import { useNavigate } from "react-router-dom";

const Editinfo = () => {
  const navigate = useNavigate();

  return (
    <EditinfoWrapper>
      <Headers />

      <Box>
        <LeftArea src={Loginimg}></LeftArea>
        <RightArea>
          <TitleLine>회원정보수정</TitleLine>
          <FormArea>
            <h3>아이디</h3>
            <StyledInput placeholder={"아이디를 입력하세요."} />
            <h3>비밀번호</h3>
            <StyledInput placeholder={"비밀번호를 입력하세요"} />
            <h3>이름</h3>
            <StyledInput placeholder={"이름를 입력하세요"} />
            <h3>전화번호</h3>
            <StyledInput placeholder={"010-1234-5678"} />
            <h3>기수</h3>
            <StyledInput placeholder={"17기"} />
            <h3>파트</h3>
            <StyledInput placeholder={"Web"} />
          </FormArea>

          <ButtonArea>
            <Button
              ButtonName={"수정하기"}
              onClick={() => {
                navigate("/personalinfo");
              }}
            />
          </ButtonArea>
        </RightArea>
      </Box>
    </EditinfoWrapper>
  );
};

export default Editinfo;

const EditinfoWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 100px 30px 60px 10px;
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
