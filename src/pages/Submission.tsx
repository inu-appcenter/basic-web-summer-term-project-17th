import styled from "styled-components";
import Header from "../components/Header";
import StyledInput from "../components/Styledinput";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";

const Submission = () => {
  const navigate = useNavigate();

  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [link, setlink] = useState("");

  const baseURL = import.meta.env.VITE_BASE_URL;

  const handlesubmit = async () => {
    try {
      if (!title.trim() || !title.trim() || !link.trim()) {
        alert("아이디와 비밀번호를 입력하세요.");
        return;
      }
      const token = localStorage.getItem("accessToken");
      if (!token) return;
      const response = await fetch(`${baseURL}/api/assignments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content, link }),
      });

      if (!response.ok) {
        throw new Error("제출에 실패했습니다.");
      }

      alert("제출 성공!");
      navigate("/");
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <SubmissionWrapper>
      <Header />
      <Titlearea>
        <div className="firstline"> {"과제 제출"} </div>
        <div className="secondline">
          {"여러분의 뛰어난 솜씨를 뽐내 보세요."}
        </div>
      </Titlearea>
      <FormArea>
        <h3>제목</h3>
        <StyledInput
          placeholder={"과제 제목을 입력하세요."}
          value={title}
          onChange={(e: any) => settitle(e.target.value)}
        />
        <h3>과제 내용</h3>
        <StyledInput
          placeholder={"과제 내용을 입력하세요."}
          value={content}
          onChange={(e: any) => setcontent(e.target.value)}
        />
        <h3>과제링크</h3>
        <StyledInput
          placeholder={"제출할 과제의 링크를 입력하세요."}
          value={link}
          onChange={(e: any) => setlink(e.target.value)}
        />
        <ButtonArea>
          <Button ButtonName={"제출하기"} onClick={handlesubmit} />
        </ButtonArea>
      </FormArea>
    </SubmissionWrapper>
  );
};

export default Submission;

const SubmissionWrapper = styled.div`
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
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #00499b;
  }
`;

const ButtonArea = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  margin-top: 20px;
`;
