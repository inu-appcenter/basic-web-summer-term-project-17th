import styled from "styled-components";
import Header from "../components/Header";
import StyledInput from "../components/StyledInput";
import Button_3 from "../components/Button_3";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Problem_edit_page = () => {

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [assignmentId, setId] = useState<number | null>(null);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const handleEdit = async () => {
    try {
      if (
        !title.trim() ||
        !content.trim() ||
        !link.trim()
      ) {
        alert("빈칸 없이 입력해주세요.");
        return;
      }
      console.log(title, content, link);
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch(`${baseURL}/api/assignments/${assignmentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({ title, content, link }),
      });
      if (!response.ok) {
        throw new Error("과제 수정 실패");
      }
      alert("과제 수정 성공!");

      navigate("/info");
    } catch (error) {
      alert((error as Error).message);
    }
  };
  return (
    <Problem_edit_page_Wrapper>
      <Header />
      <First_line>과제 수정</First_line>
      <Second_line>제출한 과제를 수정할 수 있어요.</Second_line>
      <Box>
        <h3>제목</h3>
        <StyledInput placeholder={title} value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}> </StyledInput>
        <h3>과제 링크</h3>
        <StyledInput placeholder={link} value={link}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLink(e.target.value)}></StyledInput>
        <h3>내용</h3>
        <StyledInput
          placeholder={content} value={content}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContent(e.target.value)}
        ></StyledInput>
        <Position>
          <Button_3 buttonName="수정하기" onClick={handleEdit}></Button_3>
        </Position>
      </Box>
    </Problem_edit_page_Wrapper>
  );
};
export default Problem_edit_page;

const Problem_edit_page_Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 30px 0 30px;
  box-sizing: border-box;
  background-color: #fafafa;
  padding: 120px;
`;
const First_line = styled.div`
  font-size: 50px;
  font-weight: 700;
  font-style: bold;
`;
const Second_line = styled.div`
  font-size: 20px;
  font-weight: 700;
  font-style: bold;
  color: #00499b;
  margin-bottom: 20px;
`;
const Box = styled.div`
  width: 749px;
  height: 450px;
  border-radius: 20px;
  font-family: Noto Sans KR;
  font-weight: 700;
  font-style: Bold;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #00499b;
  background-color: #ffffff;
  padding: 30px;
  position: relative;
`;
const Position = styled.div`
  display: flex;
  justify-content: center;
  //align-content: center;
  //align-items: center;
  //margin: 270px 0 0 0;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
`;
