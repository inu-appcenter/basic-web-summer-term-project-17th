import styled from "styled-components";
import Header from "../components/Header";
import Assignmentcard from "../components/Assignmentcard";
import Styleddivider from "../components/StyledDivider";
import Memberinfo from "../components/Memberinfo.tsx";
import { useState } from "react";
import { useEffect } from "react";

const Personalinfo = () => {
  interface Assignment {
    id: number;
    title: string;
    writer: string;
    content: string;
    link: string;
    createdAt: string; // 날짜를 string으로 받음 (예: "2025-08-05 14:43:11")
    modifiedAt: string; // 수정일자도 string
    recommendations: number;
    isRecommended: boolean;
  }

  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const getAssignments = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        // console.log(accessToken);
        const response = await fetch(`${baseURL}/api/assignments`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("내 과제 조회에 실패했습니다.");
        }

        setAssignments(await response.json());

        // alert("과제조회 성공!");
      } catch (error) {
        alert((error as Error).message);
      }
    };
    getAssignments();
  }, []);

  return (
    <PersonalinfoWrapper>
      <Header />
      <FirstArea>
        <div className="firstline"> {"회원정보"} </div>
        <div className="secondline">
          {"멋진 " + "part" + " 파트원 " + "name" + "님을 구경해 보세요."}
        </div>
      </FirstArea>
      <SecondArea>
        {assignments && (
          <Memberinfo
            Name={"어떻게???????"}
            generation={17}
            part={"assignment.part"}
            registrationDate={"user.registrationDate"}
            phoneNumber={"user.phoneNumber"}
          />
        )}
      </SecondArea>

      <ThirdArea>
        <div className="first"> 과제 </div>
        <CardArea>
          {assignments.map((assignment) => (
            <>
              <Assignmentcard
                assignmenttitle={assignment.title}
                link={assignment.link}
                date={assignment.createdAt}
              />
              <Styleddivider />
            </>
          ))}
        </CardArea>
      </ThirdArea>
    </PersonalinfoWrapper>
  );
};

export default Personalinfo;

const PersonalinfoWrapper = styled.div`
  width: 100%;
  height: 100vh;

  padding: 100px 30px 80px 130px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: #fafafa;
`;

const FirstArea = styled.div`
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

const SecondArea = styled.div`
  width: 749px;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  padding: 16px 16px 16px 16px;
  box-sizing: border-box;

  background-color: white;
  border-radius: 20px;
`;

const ThirdArea = styled.div`
  width: 120px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #00499b;
`;

const CardArea = styled.div`
  width: 749px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 20px 10px 20px 10px;
  gap: 20px;

  background-color: white;
  border-radius: 20px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
    padding-right: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f2b700;
    border-radius: 4px;
  }
`;
