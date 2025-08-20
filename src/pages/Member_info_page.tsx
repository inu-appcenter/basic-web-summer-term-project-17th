import styled from "styled-components";
import Header from "../components/Header";
import User_info from "../components/User_info";
import Problem from "../components/Problem";
import { useEffect, useState } from "react";


const Member_info_page = () => {
  interface User {
    name: string;
    part: string;
    gen: number;
    phoneNumber: string;
  }

  interface Assignment {
    title: string;
    content: string;
    link: string;
    createdAt: string;
    assignmentId:number;
  }

  const [members, setMembers] = useState<User[]>([]);
  const [problems, setProblems] = useState<Assignment[]>([]);
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const getProblems = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await fetch(`${baseURL}/api/assignments`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) throw new Error("과제 정보를 불러오는 중 실패했습니다.");
        const data = await response.json();
        setProblems(data);
      } catch (error) {
        alert((error as Error).message);
      }
    };

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

    getProblems();
    getMembers();
  }, []);

  return (
    <Member_info_pageWrapper>
      <Header />
      <First_line>회원 정보</First_line>
      <Second_line>멋진 {"Web"} 파트원 {"횃불이"} 님을 구경해 보세요.</Second_line>

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
        <h3>과제</h3>
      </Nyang>
      <Box>
        {problems.map(problem => (
          <Problem
            key={problem.title}
            title={problem.title}
            content={problem.content}
            link={problem.link}
            createdAt={problem.createdAt}
            assignmentId={problem.assignmentId}
          />
        ))}
      </Box>
    </Member_info_pageWrapper>
  );
};

export default Member_info_page;

const Member_info_pageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 120px 30px 0 30px;
  box-sizing: border-box;
  background-color: #fafafa;
`;
const First_line = styled.div`
  font-size: 50px;
  font-weight: 700;
`;
const Second_line = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #00499b;
  margin-bottom: 20px;
`;
const Box = styled.div`
  overflow-y: scroll;
  max-height: 400px;
  min-height: 400px;
  width: 749px;
  background: white;
  border-radius: 10px;
`;
const Nyang = styled.div`
  color: #00499b;
`;
