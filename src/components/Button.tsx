import styled from "styled-components";

const Button = ({
  buttonName,
  onClick,
}: {
  buttonName: string;
  onClick: () => void;
}) => {
  return <ButtonWrapper onClick={onClick}>{buttonName}</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled.div`
  width: 280px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 40px;

  background: #00499b;
  border-radius: 30px;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;

  cursor: pointer;
`;
