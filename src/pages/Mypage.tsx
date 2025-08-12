import styled from "styled-components";
import Header from "../components/Header";
import Menu from "../components/Menu.tsx";
import Styleddivider from "../components/StyledDivider.tsx";
import Memberinfo from "../components/Memberinfo.tsx";
const Mypage = () => {
  return (
    <MypageWrapper>
      <Header />
      <Firstarea>
        <div className="firstline"> {"마이 페이지"} </div>
        <div className="secondline">
          {"내 정보를 확인하고, 수정할 수 있어요."}
        </div>
      </Firstarea>
      <CardArea>
        <Memberinfo
          Name={"횃불이"}
          generation={"17기"}
          part={"Web"}
          date={"2025년 3월 16일"}
          PhoneNumber={"010-1234-1234"}
        />
      </CardArea>
      <Secondarea>
        <div className="firstline"> 메뉴 </div>
        <MenuArea>
          <Menu
            Name={"회원정보 수정"}
            Description={"회원정보를 수정할 수 있어요."}
          />
          <Styleddivider />
          <Menu
            Name={"회원 탈퇴"}
            Description={
              "지금 떠나면 정말 아쉬워요! 정말 앱센터를 떠나시겠어요?"
            }
          />
        </MenuArea>
      </Secondarea>
    </MypageWrapper>
  );
};

export default Mypage;

const MypageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 100px 30px 80px 130px;
  box-sizing: border-box;

  background-color: #fafafa;
  border-radius: 20px;
`;

const Firstarea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .firstline {
    width: fit-content;
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

const CardArea = styled.div`
  width: 768px;
  height: 100px;

  padding: 10px;
  box-sizing: border-box;

  background-color: white;
  border-radius: 20px;
`;

const Secondarea = styled.div`
  width: 749px;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 10px;

  .firstline {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #00499b;
  }
`;

const MenuArea = styled.div`
  width: 749px;
  height: 200px;

  background: #ffffff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 10px 10px 10px 10px;
  background-color: white;
  border-radius: 20px;
`;
