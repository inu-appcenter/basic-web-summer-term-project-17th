import styled from "styled-components";
import Header from "../components/Header";
import User_info from "../components/User_info";
import Menu_component from "../components/Menu_component";
import { useEffect, useState } from "react";
const My_page = () => {
interface MypageProp {
    name: string;
    part: string;
    gen: number;
    phoneNumber: string;
}
  
    const [members, setMembers] = useState<MypageProp[]>([]);
    const baseURL = import.meta.env.VITE_BASE_URL;
  
    useEffect(() => {
  
      const getMembers = async () => {
        try {
          const accessToken = localStorage.getItem("accessToken");
          const response = await fetch(`${baseURL}/api/users/me`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          });
          if (!response.ok) throw new Error("유저 정보를 불러오는 중 실패했습니다.");
          const data = await response.json();
          setMembers([data]);
        } catch (error) {
          alert((error as Error).message);
        }
      };
      getMembers();
    }, []);
  return (
    <My_page_Wrapper>
      <Header />
      <First_line>마이 페이지</First_line>
      <Second_line>내 정보를 확인하고, 수정할 수 있어요.</Second_line>
      <br></br>
      <Nyang>
        <h3>회원 정보</h3>
      </Nyang>
      {members.map(member => (
        <User_info
          key={member.name}
          name={member.name}
          regist_date="2025/08/05"
          gen={member.gen}
          part={member.part}
        />
      ))}
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
