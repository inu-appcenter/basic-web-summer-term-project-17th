import styled from "styled-components";
import Header from "../components/Header";
import StyledInput from "../components/StyledInput";
import Button_3 from "../components/Button_3";
const Problem_submit_page = () => {
  return (
    <Problem_submit_Wrapper>
      <Header />
      <First_line>과제 제출</First_line>
      <Second_line>여러분의 뛰어난 솜씨를 뽐내 보세요.</Second_line>
      <Box>
        <h3>제목</h3>
        <StyledInput placeHolder={"과제 제목을 입력하세요."}></StyledInput>
        <h3>과제 링크</h3>
        <StyledInput
          placeHolder={"제출할 과제의 링크를 입력하세요."}
        ></StyledInput>
        <Position>
          <Button_3 buttonName="제출하기"></Button_3>
        </Position>
      </Box>
    </Problem_submit_Wrapper>
  );
};
export default Problem_submit_page;

const Problem_submit_Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 30px 0 30px;
  box-sizing: border-box;
  background-color: #fafafa;
  padding: 120px;
`;
const First_line = styled.div`
  font-size: 50px;
  font-weight: 700;
  font-style: bold;
`;
const Second_line = styled.div`
  font-size: 20px;
  font-weight: 700;
  font-style: bold;
  color: #00499b;

  margin-bottom: 20px;
`;
const Box = styled.div`
  width: 749px;
  height: 450px;
  border-radius: 20px;
  font-family: Noto Sans KR;
  font-weight: 700;
  font-style: Bold;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #00499b;
  background-color: #ffffff;
  padding: 30px;

  position: relative;
`;
const Position = styled.div`
  display: flex;
  justify-content: center;
  //align-content: center;
  //align-items: center;
  //margin: 270px 0 0 0;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
`;
