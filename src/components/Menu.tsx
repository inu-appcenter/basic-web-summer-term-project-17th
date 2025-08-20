import styled from "styled-components";
import { ChevronRight } from "lucide-react";

interface CardProps {
  Name: string;
  Description: string;
  onClick?: () => void;
}

const Menu = ({ Name, Description, onClick }: CardProps) => {
  return (
    <MenuWrapper>
      <FirstArea>
        <div className="firstline">{Name} </div>
        <div className="secondline">{Description}</div>
      </FirstArea>
      <Secondarea>
        <ChevronRight
          size={20}
          strokeWidth={2}
          onClick={onClick} // ✅ 클릭 시 실행
          style={{ cursor: "pointer" }}
        />
      </Secondarea>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 75px;

  background-color: white;
  border-radius: 20px;
`;

const FirstArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  padding-left: 20px;
`;

const Secondarea = styled.div`
  margin-left: auto; /* 오른쪽 끝으로 */
  align-self: center;
`;
