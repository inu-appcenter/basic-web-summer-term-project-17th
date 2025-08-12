import styled from "styled-components";
import Card from "../components/Card.tsx";
import Header from "../components/Header.tsx";

function HomePage() {

  return (
    <Wrapper>
        <Header/>
        <FirstArea>
            <div className="firstline">함께 공부해요.</div>
            <div className="secondline">정보전산원 학생 IT 동아리 <span className="appcenter">Appcenter</span></div>

        </FirstArea>

        <SecondArea>
            <div className="firstline">주요 기능을 소개합니다.</div>
            <div className="secondline">
                <Card title={"앱센터 회원 목록"} text={"앱센터 회원의 정보를 조회하고, 수정하고, 삭제할 수 있어요."}/>
                <Card title={"과제 제출"} text={"앱센터 회원들이 과제를 제출하고,\n" +
                    "제출한 과제를 수정하거나 삭제할 수 있어요."}/>

            </div>


        </SecondArea>

    </Wrapper>
  )
}

export default HomePage;

const Wrapper = styled.div`
width: 100%;
    height: 100%;
    
    padding: 100px 30px 60px 30px;
    box-sizing: border-box;
    
    display: flex;
    flex-direction: column;
    gap:100px;
    
    background-color: #fafafa;
`


const FirstArea = styled.div`
    text-align: start;
    
    
    .firstline {
        font-style: normal;
        font-weight: 900;
        font-size: 72px;
        line-height: 160%;
        letter-spacing: -0.05em;

        color: #00499B;


    }
    
    .secondline {

        font-style: normal;
        font-weight: 900;
        font-size: 60px;
        line-height: 160%;
        letter-spacing: -0.05em;

        color: #000000;
        
        .appcenter{
            color: #FAAF10;
        }
        
    }
    `

const SecondArea = styled.div`
    text-align: start;
    display: flex;
    flex-direction: column;
    gap:20px;
    
    .firstline {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #00499B;
    }
    
    .secondline {
        display: flex;
        flex-direction: row;
        gap:12px;
    }
`