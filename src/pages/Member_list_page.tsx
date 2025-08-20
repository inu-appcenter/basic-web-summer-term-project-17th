import styled from "styled-components";
import Header from "../components/Header";
import User_list from "../components/User_list";
import { useEffect, useState } from "react";
const Member_list_page = () => {
  interface User {
    email: string;
    name: string;
    part: string;
    gen: number;
    phoneNumber: string;
  }
  const [members, setMembers] = useState<User[]>([]);
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const getMembers = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        const response = await fetch(`${baseURL}/api/users/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("리스트를 불러오는중 실패했습니다.");
        }
        setMembers(await response.json());
        alert("리스트 불러오기 성공!");
      } catch (error) {
        alert((error as Error).message);
      }
    };
    getMembers();
  }, []);
  return (
    <Member_list_pageWrapper>
      <Header />
      <First_line>회원 목록</First_line>
      <Second_line>멋진 앱센터 회원들을 소개합니다.</Second_line>
      <Box>
        {members.map((member) => (
          <User_list
            name={member.name}
            number={member.phoneNumber}
            regist_date="2025/08/05"
            generation={member.gen}
            part={member.part}
          />
        ))}
      </Box>
    </Member_list_pageWrapper>
  );
};
export default Member_list_page;

const Member_list_pageWrapper = styled.div`
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
  //font-style: bold;
`;
const Second_line = styled.div`
  font-size: 20px;
  font-weight: 700;
  //font-style: bold;
  color: #00499b;

  margin-bottom: 20px;
`;
const Box = styled.div`
  overflow-y: scroll;
  max-height: 440px;
  min-height: 440px;
  max-width: fit-content;
  background-color: white;
  border-radius: 10px;
`;
