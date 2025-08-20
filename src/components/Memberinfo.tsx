import styled from "styled-components";
import profile from "../assets/profile.svg";

interface CardProps {
  Name: string;
  generation: number;
  part: string;
  registrationDate: string;
  phoneNumber: string;
}

const Card = ({
  Name,
  generation,
  part,
  registrationDate,
  phoneNumber,
}: CardProps) => {
  return (
    <CardWrapper>
      <FirstArea>
        <img src={profile} />
      </FirstArea>
      <SecondArea>
        <div className="firstline">{Name}</div>
        <div className="secondline">
          <Badge className={"generation"}>{generation}</Badge>
          <Badge className={"part"}>{part}</Badge>
        </div>
      </SecondArea>
      <ThirdArea>
        <div className="firstline">가입일: {registrationDate}</div>
        <div className="secondline">전화번호: {phoneNumber}</div>
      </ThirdArea>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  max-width: 749px;
  height: 75px;
  padding-top: 8px;

  background-color: white;
  border-radius: 20px;
`;

const FirstArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;
`;

const SecondArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%; /* ✅ 남은 공간 꽉 채우도록 */
  min-width: 0;

  max-width: 400px; /* ✅ 이름 영역 최대 폭 제한 */
  min-width: 150px; /* (선택) 너무 작아지지 않도록 최소 폭 */
  flex-shrink: 1;

  .firstline {
    font-size: 18px;
    font-weight: 700;
    color: #111111;

    overflow: hidden; /* 넘친 글자 숨김 */
    text-overflow: ellipsis; /* ... 처리 */
    white-space: nowrap;
  }

  .secondline {
    display: flex;
    flex-direction: row;
    gap: 6px;

    // font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    color: #ffffff;
  }
`;

const Badge = styled.div`
  display: inline-block;
  padding: 2px 8px;

  font-size: 11px;
  font-weight: 600;
  color: white;
  border-radius: 12px;

  &.generation {
    background-color: #00499b;
  }

  &.part {
    background-color: #faaf10;
  }
`;

const ThirdArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  margin-left: auto;
  text-align: right;
  font-size: 14px;

  .firstline {
    font-weight: 500;
  }

  .secondline {
    font-weight: 400;
  }
`;
