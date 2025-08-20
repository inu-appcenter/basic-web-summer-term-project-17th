import styled from "styled-components";
import Header from "../components/Header";
import StyledInput from "../components/Styledinput";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import { useEffect } from "react";

const EditAssignment = () => {
  const navigate = useNavigate();

  const baseURL = import.meta.env.VITE_BASE_URL;
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [link, setlink] = useState("");

  useEffect(() => {
    const fetchMe = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      const response = await fetch(`${baseURL}/api/users/me`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        settitle(data.title);
        setcontent(data.content);
        setlink(data.link);
      }
    };

    fetchMe();
  }, []);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        throw new Error("로그인이 필요합니다.");
      }

      const updateResponse = await fetch(`${baseURL}/api/users/me`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          content,
          link,
        }),
      });

      if (!updateResponse.ok) {
        throw new Error("과제 수정 실패");
        const errorText = await updateResponse.text();
        console.error("서버 응답:", errorText);
      }

      const updatedUser = await updateResponse.json();
      console.log("수정된 과제 정보:", updatedUser);

      alert("과제 수정 성공!");
      navigate("/mypage");
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <EditAssignmentWrapper>
      <Header />
      <Titlearea>
        <div className="firstline"> {"과제 수정"} </div>
        <div className="secondline">{"제출한 과제를 수정할 수 있어요."}</div>
      </Titlearea>
      <FormArea>
        <h3>제목</h3>
        <StyledInput
          value={title}
          placeholder={"제목을 입력하세요"}
          onChange={(e: any) => settitle(e.target.value)}
        />
        <h3>내용</h3>
        <StyledInput
          value={content}
          placeholder={"내용을 입력하세요"}
          onChange={(e: any) => setcontent(e.target.value)}
        />
        <h3>과제링크</h3>
        <StyledInput
          value={link}
          placeholder={"링크를 입력하세요"}
          onChange={(e: any) => setlink(e.target.value)}
        />

        <ButtonArea>
          <Button ButtonName={"수정하기"} onClick={handleUpdate} />
        </ButtonArea>
      </FormArea>
    </EditAssignmentWrapper>
  );
};

export default EditAssignment;

const EditAssignmentWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  gap: 40px;

  padding: 30px 30px 80px 130px;

  background-color: #fafafa;
  border-radius: 20px;
`;

const Titlearea = styled.div`
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

const FormArea = styled.div`
  width: 749px;
  height: 550px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 30px 60px 20px 60px;
  box-sizing: border-box;

  background-color: white;
  border-radius: 20px;

  h3 {
    width: 100%;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #00499b;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 100%;
  height: 100%;
  margin-top: 20px;
`;
