import styled from "styled-components";
import Book from "../assets/book.png";

interface CardProps {
  title: string;
  text: string;
}
const Card = ({ title, text }: CardProps) => {
  return (
    <CardWrapper>
      <FirstArea>
        <img src={Book} />
      </FirstArea>
      <SecondArea>
        <div className="firstline">{title}</div>
        <div className="secondline">{text}</div>
      </SecondArea>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 300px;
  min-height: 350px;
  height: fit-content;

  padding: 30px;
  box-sizing: border-box;

  background-color: white;
  border-radius: 10px;
`;

const FirstArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: fit-content;
`;

const SecondArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  height: fit-content;

  .firstline {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #111111;
  }

  .secondline {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: #565656;
  }
`;
