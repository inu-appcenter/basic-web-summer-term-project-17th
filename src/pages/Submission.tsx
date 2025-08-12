import styled from "styled-components";
import Header from "../components/Header";
import StyledInput from "../components/Styledinput";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Submission = () => {
  const navigate = useNavigate();
  return (
    <SubmissionWrapper>
      <Header />
      <Titlearea>
        <div className="firstline"> {"과제 제출"} </div>
        <div className="secondline">
          {"여러분의 뛰어난 솜씨를 뽐내 보세요."}
        </div>
      </Titlearea>
      <FormArea>
        <h3>제목</h3>
        <StyledInput placeholder={"과제 제목을 입력하세요."} />
        <h3>과제링크</h3>
        <StyledInput placeholder={"제출할 과제의 링크를 입력하세요."} />
        <ButtonArea>
          <Button
            ButtonName={"제출하기"}
            onClick={() => {
              navigate("/Personalinfo");
            }}
          />
        </ButtonArea>
      </FormArea>
    </SubmissionWrapper>
  );
};

export default Submission;

const SubmissionWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 100px 30px 80px 130px;

  background-color: #fafafa;
  border-radius: 20px;
`;

const Titlearea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .firstline {
    width: 141px;
    height: 43px;

    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;

    color: #000000;
  }

  .secondline {
    width: fit-content;
    height: 24px;

    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: #00499b;
  }
`;

const FormArea = styled.div`
  width: 749px;
  height: 550px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 30px 60px 20px 60px;
  box-sizing: border-box;

  background-color: white;
  border-radius: 20px;

  h3 {
    width: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #00499b;
  }
`;

const ButtonArea = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  margin-top: 20px;
`;
