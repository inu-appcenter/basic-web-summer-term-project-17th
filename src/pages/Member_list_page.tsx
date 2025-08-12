import styled from "styled-components";
import Header from "../components/Header";
import User_list from "../components/User_list";
const Member_list_page=()=>{    
 return(
   <Member_list_pageWrapper>
    <Header/>
    <First_line>회원 목록</First_line>
    <Second_line>멋진 앱센터 회원들을 소개합니다.</Second_line>
    <Box class ="scroll">
      <User_list name ={"횃불이"} number="010-1234-1234" regist_date = "2025/08/05"/>
      <User_list name ={"횃불이"} number="010-1234-1234" regist_date = "2025/08/05"/>
      <User_list name ={"횃불이"} number="010-1234-1234" regist_date = "2025/08/05"/>
      <User_list name ={"횃불이"} number="010-1234-1234" regist_date = "2025/08/05"/>
      <User_list name ={"횃불이"} number="010-1234-1234" regist_date = "2025/08/05"/>
      <User_list name ={"횃불이"} number="010-1234-1234" regist_date = "2025/08/05"/>
      <User_list name ={"횃불이"} number="010-1234-1234" regist_date = "2025/08/05"/>
    </Box>
   </Member_list_pageWrapper> 
 )   
}
export default Member_list_page;

const Member_list_pageWrapper=styled.div`
  width:100%;
  height:100%;
  padding:100px 30px 0 30px;
  box-sizing:border-box;
  background-color: #FAFAFA;
  padding: 120px;
`
const First_line=styled.div`
    font-size: 50px;
    font-weight: 700;
    font-style: bold;
`
const Second_line=styled.div`
    font-size: 20px;
    font-weight: 700;
    font-style: bold;
    color: #00499b;
    
`
const Box=styled.div`
  
overflow-y:scroll;
max-height: 440px;
max-width: fit-content;
`