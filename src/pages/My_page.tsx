import styled from "styled-components";
import Header from "../components/Header";
import User_list from "../components/User_list";
import Menu_component from "../components/Menu_component";
const My_page = () => {
  return (
    <My_page_Wrapper>
      <Header />
      <First_line>마이 페이지</First_line>
      <Second_line>내 정보를 확인하고, 수정할 수 있어요.</Second_line>
      <br></br>
      <Nyang>
        <h3>회원 정보</h3>
      </Nyang>
      <User_list
        name={"횃불이"}
        number="010-1234-1234"
        regist_date="2025/08/05"
        part={"Web"}
        generation={"17기"}
      />
      <Nyang>
        <h3>메뉴</h3>
      </Nyang>
      <Box>
        <Menu_component
          title="회원정보 수정"
          text="회원정보를 수정할 수 있어요."
        />
        <Menu_component
          title="회원 탈퇴"
          text="지금 떠나면 정말 아쉬워요! 정말 앱센터를 떠나시겠어요?"
        />
      </Box>
    </My_page_Wrapper>
  );
};
export default My_page;

const My_page_Wrapper = styled.div`
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
`;
const Box = styled.div`
  max-height: 300px;
  max-width: 749px;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
`;
const Nyang = styled.div`
  color: #00499b;
`;
