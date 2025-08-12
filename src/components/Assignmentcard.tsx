import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface CardProps {
  assignmenttitle: string;
  link: string;
  date: string;
}

const Assignmentcard = ({ assignmenttitle, link, date }: CardProps) => {
  const navigate = useNavigate();
  return (
    <CardWrapper>
      <FirstArea>
        <div className="firstline">{assignmenttitle}</div>
        <div className="secondline">{link}</div>
      </FirstArea>
      <SecondArea>
        <div className="firstline">{date}</div>
        <ButtonArea>
          <button
            className="edit"
            onClick={() => {
              navigate("/editassignment");
            }}
          >
            수정
          </button>

          <button
            className="delete"
            onClick={() => {
              navigate("/Personalinfo");
            }}
          >
            삭제
          </button>
        </ButtonArea>
      </SecondArea>
    </CardWrapper>
  );
};

export default Assignmentcard;

const CardWrapper = styled.div`
  width: 100%;
  height: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: white;
  border-radius: 20px;
  padding: 0 20px;
  box-sizing: border-box;
`;

const FirstArea = styled.div`
  .firstline {
    width: 369px;
    height: 29px;

    display: flex;
    align-items: center;

    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: #000000;
  }

  .secondline {
    width: 369px;
    height: 29px;

    display: flex;
    align-items: center;
    text-decoration-line: underline;

    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    color: #454545;
  }
`;

const SecondArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 5px;

  .firstline {
    display: flex;
    align-items: center;
    text-align: right;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #000000;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  .edit {
    width: 57px;
    height: 27px;
    padding: 3px 11px;

    border: 1.5px solid #00499b;
    border-radius: 20px;

    background-color: white;
    color: #00499b;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;
  }

  .delete {
    width: 57px;
    height: 27px;
    padding: 3px 11px;

    border: 1.5px solid #d63a12;
    border-radius: 20px;

    background-color: white;
    color: #d63a12;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;
  }
`;
