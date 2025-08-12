import styled from "styled-components";
import Header from "../components/Header";
import StyledInput from "../components/Styledinput";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const EditAssignment = () => {
  const navigate = useNavigate();
  return (
    <EditAssignmentWrapper>
      <Header />
      <Titlearea>
        <div className="firstline"> {"과제 수정"} </div>
        <div className="secondline">{"제출한 과제를 수정할 수 있어요."}</div>
      </Titlearea>
      <FormArea>
        <h3>제목</h3>
        <StyledInput placeholder={"과제 제목을 입력하세요."} />
        <h3>과제링크</h3>
        <StyledInput placeholder={"제출할 과제의 링크를 입력하세요."} />
        <h3>제출일</h3>
        <StyledInput
          placeholder={"solar:calendar-linear 2025년 7월 9일 오전 3시 49분"}
        />
        <ButtonArea>
          <Button
            ButtonName={"수정하기"}
            onClick={() => {
              navigate("/personalinfo");
            }}
          />
        </ButtonArea>
      </FormArea>
    </EditAssignmentWrapper>
  );
};

export default EditAssignment;

const EditAssignmentWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  gap: 40px;

  padding: 30px 30px 80px 130px;

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
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #00499b;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 100%;
  height: 100%;
  margin-top: 20px;
`;
