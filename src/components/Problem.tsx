import styled from "styled-components";
import Button_2 from "../components/Button_2.tsx";
import { useNavigate } from "react-router-dom";
interface ProblemProp {
  title: string;
  content: string;
  link: string;
  createdAt: string;
  assignmentId:number;
}

const Problem = ({ title, link, createdAt,assignmentId }: ProblemProp) => {

  const navigate = useNavigate();
const handleEdit = () => {
  navigate(`/problem/edit/${assignmentId}`); 
};
const handleDelete = async () => {
  if (!window.confirm("정말 삭제하시겠습니까?")) return;

  const baseURL = import.meta.env.VITE_BASE_URL;
  const accessToken = localStorage.getItem("accessToken");

  const response = await fetch(`${baseURL}/api/assignments/${assignmentId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!response.ok) throw new Error("삭제 실패");
  alert("삭제 성공!");
  navigate("/info"); // 또는 리스트 갱신
};
  
  return (
    <ProblemWrapper>
      <Area_1>
        <Title>{title}</Title>
        <URL>{link}</URL>
      </Area_1>
      <Area_2>
        <Submit>제출일 : {createdAt}</Submit>
        <A>
          <Button_2 buttonName="수정" onClick={handleEdit} />
          <Button_2 buttonName="삭제" onClick={handleDelete} />
        </A>
      </Area_2>
    </ProblemWrapper>
  );
};

export default Problem;

const ProblemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #d9d9d9;
`;
const Area_1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 30px;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
`;
const URL = styled.div`
  font-weight: 500;
  font-size: 12px;
  text-decoration: underline;
  color: #454545;
`;
const Area_2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 30px;
  height: 100px;
`;
const Submit = styled.div`
  font-size: 12px;
  text-align: right;
  color: #000000;
`;
const A = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;
