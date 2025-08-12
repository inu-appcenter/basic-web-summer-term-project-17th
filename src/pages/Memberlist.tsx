import styled from "styled-components";
import Header from "../components/Header";
import Memberinfo from "../components/Memberinfo.tsx";
import Styleddivider from "../components/StyledDivider";

function Memberlist() {
  return (
    <MemberlistWrapper>
      <Header />
      <FirstArea>
        <div className="firstline"> 회원 목록 </div>
        <div className="secondline"> 멋진 앱센터 회원들을 소개합니다. </div>
      </FirstArea>

      <SecondArea>
        <Memberinfo
          Name={"횃불이"}
          generation={"17기"}
          part={"Web"}
          date={"2025년 3월 16일"}
          PhoneNumber={"010-1234-1234"}
        />
        <Styleddivider />
        <Memberinfo
          Name={"횃불이"}
          generation={"17기"}
          part={"Server"}
          date={"2025년 3월 16일"}
          PhoneNumber={"010-1234-1234"}
        />
        <Styleddivider />
        <Memberinfo
          Name={"횃불이"}
          generation={"17기"}
          part={"Android"}
          date={"2025년 3월 16일"}
          PhoneNumber={"010-1234-1234"}
        />
        <Styleddivider />
        <Memberinfo
          Name={"횃불이"}
          generation={"17기"}
          part={"Web"}
          date={"2025년 3월 16일"}
          PhoneNumber={"010-1234-1234"}
        />
        <Styleddivider />
        <Memberinfo
          Name={"횃불이"}
          generation={"17기"}
          part={"Ios"}
          date={"2025년 3월 16일"}
          PhoneNumber={"010-1234-1234"}
        />
        <Styleddivider />
        <Memberinfo
          Name={"횃불이"}
          generation={"17기"}
          part={"Web"}
          date={"2025년 3월 16일"}
          PhoneNumber={"010-1234-1234"}
        />
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
