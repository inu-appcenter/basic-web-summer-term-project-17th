import styled from "styled-components";
import profile from "../assets/profile.svg";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate();
  const isLoginned = () => {
    if (localStorage.getItem("name")) {
      console.log("true반환");
      return true;
    } else return false;
  };
  return (
    <UserInfoWrapper>
      {isLoginned() && (
        <>
          <img
            src={profile}
            alt="Profile"
            onClick={() => navigate("/mypage")} // ✅ 홈으로 이동
            style={{ cursor: "pointer" }}
          />
          <span className="userName"> {localStorage.getItem("name")} 님</span>
        </>
      )}
    </UserInfoWrapper>
  );
};

export default UserInfo;
const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: fit-content;
  height: fit-content;
  color: #111111;

  img {
    width: 40px;
    height: 40px;
  }
`;
