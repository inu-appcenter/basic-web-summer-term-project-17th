import styled from "styled-components";

const Button = ({
  ButtonName,
  onClick,
}: {
  ButtonName: string;
  onClick: () => void;
}) => {
  return <ButtonWrapper onClick={onClick}> {ButtonName}</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled.button`
  width: 280px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 40px;

  background: #00499b;
  border: none;
  border-radius: 30px;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;

  cursor: pointer;
`;
