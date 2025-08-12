import styled from "styled-components";
import Button_2 from "../components/Button_2.tsx";
import { useNavigate } from "react-router-dom";
const Problem = () => {
  const navigate = useNavigate();
  return (
    <ProblemWrapper>
      <Area_1>
        <Title>첫 번째 과제에요!!</Title>
        <URL>https://home.inuappcenter.kr</URL>
      </Area_1>
      <Area_2>
        <Submit>제출일 : 2025년 3월 16일</Submit>
        <A>
          <Button_2
            buttonName="수정"
            onClick={() => {
              navigate("/info");
            }}
          />
          <Button_2
            buttonName="삭제"
            onClick={() => {
              navigate("/info");
            }}
          />
        </A>
      </Area_2>
    </ProblemWrapper>
  );
};
export default Problem;
const ProblemWrapper: any = styled.div`
  display: flex;
  justify-content: space-between; //영역 양끝으로 보내기
  flex-direction: row;
  border-bottom: solid 1px #d9d9d9;
`;
const Area_1: any = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 20px;
  font-weight: 700;
  font-style: bold;
  margin: 30px;
  width: fit-content;
`;
const Title: any = styled.div`
  font-family: Noto Sans KR;
  font-weight: 700;
  font-style: Bold;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
`;
const URL: any = styled.div`
  font-family: Noto Sans KR;
  font-weight: 500;
  font-style: Medium;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 0%;
  text-decoration-skip-ink: auto;
  color: #454545;
`;
const Area_2: any = styled.div`
  background-color: #ffffff;
  display: flex;
  gap: 20px;
  width: fit-content;
  height: 100px;
  padding: 20px 30px;
  box-sizing: border-box;
  justify-content: space-between;
  flex-direction: column;
`;
const Submit: any = styled.div`
  font-family: Noto Sans KR;
  font-weight: 400;
  font-style: Regular;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: right;
  vertical-align: middle;
  font-family: Noto Sans KR;
  font-weight: 400;
  font-style: Regular;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: right;
  vertical-align: middle;
  color: #000000;
`;
const A: any = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 15px;
`;
