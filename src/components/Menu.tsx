import styled from "styled-components";

interface CardProps {
  Name: string;
  Description: string;
}

const Menu = ({ Name, Description }: CardProps) => {
  return (
    <MenuWrapper>
      <FirstArea>
        <div className="firstline">{Name} </div>
        <div className="secondline">{Description}</div>
      </FirstArea>
      <Secondarea></Secondarea>
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
  width: 24px;
  height: 24px;
`;
