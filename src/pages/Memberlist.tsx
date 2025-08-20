import styled from "styled-components";
import Header from "../components/Header";
import Memberinfo from "../components/Memberinfo.tsx";
import Styleddivider from "../components/StyledDivider";
import { useState } from "react";
import { useEffect } from "react";

function Memberlist() {
  interface User {
    id: string;
    email: string;
    name: string;
    part: string;
    generation: number;
    registrationDate: string;
    phoneNumber: string;
  }

  const [members, setmembers] = useState<User[]>([]);
  const baseURL = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    const getMembers = async () => {
      try {
        const acceseToken = localStorage.getItem("accessToken");
        // console.log(accessToken);
        const response = await fetch(`${baseURL}/api/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${acceseToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("정보 조회에 실패했습니다.");
        }

        setmembers(await response.json());

        // alert("정보조회 성공");
      } catch (error) {
        alert((error as Error).message);
      }
    };
    getMembers();
  }, []);

  return (
    <MemberlistWrapper>
      <Header />
      <FirstArea>
        <div className="firstline"> 회원 목록 </div>
        <div className="secondline"> 멋진 앱센터 회원들을 소개합니다. </div>
      </FirstArea>

      <SecondArea>
        {members.map((member) => (
          <>
            <Memberinfo
              Name={member.name}
              generation={member.generation}
              part={member.part}
              registrationDate={member.registrationDate}
              phoneNumber={member.phoneNumber}
            />
            <Styleddivider />
          </>
        ))}
      </SecondArea>
    </MemberlistWrapper>
  );
}

export default Memberlist;

const MemberlistWrapper = styled.div`
  width: 100%;
  max-height: 100%;

  padding: 100px 30px 200px 130px; //padding-bottom 잘린다..ㅠ
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 20px;

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
    width: 384px;
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
  height: 400px;

  padding: 20px 30px;
  box-sizing: border-box;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  gap: 7px;

  background-color: white;
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
