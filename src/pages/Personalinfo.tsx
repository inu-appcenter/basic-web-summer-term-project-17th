import styled from "styled-components";
import Header from "../components/Header";
import Memberinfo from "../components/Memberinfo.tsx";
import Assignmentcard from "../components/Assignmentcard";

const Personalinfo = () => {
  return (
    <PersonalinfoWrapper>
      <Header />
      <FirstArea>
        <div className="firstline"> {"회원정보"} </div>
        <div className="secondline">
          {"멋진 {part} 파트원 {Name} 님을 구경해 보세요."}
        </div>
      </FirstArea>
      <SecondArea>
        <Memberinfo
          Name={"횃불이"}
          generation={"17기"}
          part={"Web"}
          date={"2025년 3월 16일"}
          PhoneNumber={"010-1234-1234"}
        />
      </SecondArea>

      <ThirdArea>
        <div className="first"> 과제 </div>
        <CardArea>
          <Assignmentcard
            assignmenttitle={"첫번째 과제예요!"}
            link={"https://home.inuappcenter.kr"}
            date={"제출일: 2025년 3월 16일"}
          />
          <Assignmentcard
            assignmenttitle={"첫번째 과제예요!"}
            link={"https://home.inuappcenter.kr"}
            date={"제출일: 2025년 3월 16일"}
          />
          <Assignmentcard
            assignmenttitle={"첫번째 과제예요!"}
            link={"https://home.inuappcenter.kr"}
            date={"제출일: 2025년 3월 16일"}
          />
          <Assignmentcard
            assignmenttitle={"첫번째 과제예요!"}
            link={"https://home.inuappcenter.kr"}
            date={"제출일: 2025년 3월 16일"}
          />
          <Assignmentcard
            assignmenttitle={"첫번째 과제예요!"}
            link={"https://home.inuappcenter.kr"}
            date={"제출일: 2025년 3월 16일"}
          />
          <Assignmentcard
            assignmenttitle={"첫번째 과제예요!"}
            link={"https://home.inuappcenter.kr"}
            date={"2025년 3월 16일"}
          />
        </CardArea>
      </ThirdArea>
    </PersonalinfoWrapper>
  );
};

export default Personalinfo;

const PersonalinfoWrapper = styled.div`
  width: 100%;
  height: 100%;

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
  height: 70x;

  display: flex;
  flex-direction: column;
  align-items: center;
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
