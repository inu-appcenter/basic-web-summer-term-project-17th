import styled from "styled-components";
import Header from "../components/Header";
import Menu from "../components/Menu.tsx";
import Styleddivider from "../components/StyledDivider.tsx";
import Memberinfo from "../components/Memberinfo.tsx";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const navigate = useNavigate();
  interface User {
    id: string;
    email: string;
    name: string;
    part: string;
    generation: number;
    registrationDate: string;
    phoneNumber: string;
  }

  const [user, setUser] = useState<User>();
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const getUser = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        console.log(accessToken);
        const response = await fetch(`${baseURL}/api/users/me`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("내 정보 조회에 실패했습니다.");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        alert((error as Error).message);
      }
    };
    getUser();
  }, []);

  const handleDelete = async () => {
    if (
      !window.confirm("정말 탈퇴하시겠습니까? 이 작업은 되돌릴 수 없습니다.")
    ) {
      return;
    }

    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        throw new Error("로그인이 필요합니다.");
      }

      const response = await fetch(`${baseURL}/api/users/me`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("서버 응답:", errorText);
        throw new Error("회원 탈퇴에 실패했습니다.");
      }

      alert("회원 탈퇴가 완료되었습니다.");
      localStorage.removeItem("accessToken"); // 토큰 제거
      navigate("/"); // 메인 화면으로 이동
    } catch (error) {
      alert((error as Error).message);
    }
  };

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
        {user && (
          <Memberinfo
            Name={user.name}
            generation={user.generation}
            part={user.part}
            registrationDate={user.registrationDate}
            phoneNumber={user.phoneNumber}
          />
        )}
      </CardArea>
      <Secondarea>
        <div className="firstline"> 메뉴 </div>
        <MenuArea>
          <Menu
            Name={"회원정보 수정"}
            Description={"회원정보를 수정할 수 있어요."}
            onClick={() => navigate("/editinfo")}
          />
          <Styleddivider />
          <Menu
            Name={"회원 탈퇴"}
            Description={
              "지금 떠나면 정말 아쉬워요! 정말 앱센터를 떠나시겠어요?"
            }
            onClick={handleDelete}
          />
          <Styleddivider />
          <Menu
            Name={"과제"}
            Description={"과제 목록을 볼 수 있어요."}
            onClick={() => navigate("/personalinfo")}
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
  box-sizing: border-box;
  gap: 10px;

  padding: 100px 30px 80px 130px;

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
  width: 749px;
  height: 100px;

  padding: 16px 16px 16px 16px;
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
  width: 729px;
  height: fit-content;

  background: #ffffff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 20px 10px 20px 10px;
  background-color: white;
  border-radius: 20px;
`;
