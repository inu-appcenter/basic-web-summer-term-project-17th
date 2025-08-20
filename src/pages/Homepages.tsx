import styled from "styled-components";
import Header from "../components/Header";
import Card from "../components/Card";

function Homepages() {
  return (
    <Wrapper>
      <Header></Header>
      <FirstArea>
        <div className="firstline">함께 공부해요.</div>

        <div className="secondline">
          정보전산원 학생 IT 동아리 <span className="appcenter">APPCENTER</span>
        </div>
      </FirstArea>

      <SecondArea>
        <div className="title">주요기능을 소개합니다.</div>
        <div className="cardsection">
          <Card
            title={"앱센터 회원 목록"}
            text="회원들을 추가하고, 삭제하고, 수정할 수 있습니다."
          />
          <Card
            title={"과제 제출"}
            text={
              "앱센터 회원들이 과제를 제출하고 \n\n" +
              "제출한 과제를 수정하서나 삭제할 수 있어요."
            }
          />
        </div>
      </SecondArea>
    </Wrapper>
  );
}

export default Homepages;

const Wrapper = styled.div`
  width: 100%;
  min-width: 1200px;
  height: 100%;

  padding: 100px 30px 60px 30px;
  box-sizing: border-box;
  gap: 70px;

  display: flex;
  flex-direction: column;
  background-color: #fafafa;
`;

const FirstArea = styled.div`
  text-align: left;
  .firstline {
    font-style: normal;
    font-weight: 900;
    font-size: 72px;
    line-height: 160%;
    letter-spacing: -0.05em;

    color: #00499b;
  }
  .secondline {
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 60%;
    letter-spacing: -0.05em;

    color: #000000;

    .appcenter {
      color: #faaf10;
    }
  }
`;

const SecondArea = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */

  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 160%;
    letter-spacing: -0.05em;

    color: #00499b;
  }

  .cardsection {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
`;
