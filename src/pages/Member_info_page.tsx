import styled from "styled-components";
import Header from "../components/Header";
import User_list from "../components/User_list";
import Problem from "../components/Problem";
const Member_info_page = () => {
  return (
    <Member_info_pageWrapper>
      <Header />
      <First_line>회원 정보</First_line>
      <Second_line>
        멋진 {"Web"} 파트원 {"횃불이"} 님을 구경해 보세요.
      </Second_line>
      <User_list
        name={"횃불이"}
        number="010-1234-1234"
        regist_date="2025/08/05"
        generation={"17기"}
        part={"Web"}
      />
      <Nyang>
        <h3>과제</h3>
      </Nyang>
      <Box>
        <Problem />
        <Problem />
        <Problem />
        <Problem />
        <Problem />
        <Problem />
      </Box>
    </Member_info_pageWrapper>
  );
};
export default Member_info_page;

const Member_info_pageWrapper = styled.div`
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
  overflow-y: scroll;
  max-height: 400px;
  min-height: 400px;
  width: 749px;
  button:last-child {
    border: solid 2px #ff4d4f;
    color: #ff4d4f;
  }
  background: white;

  border-radius: 10px;
`;
const Nyang = styled.div`
  color: #00499b;
`;
