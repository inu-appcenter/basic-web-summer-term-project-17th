import styled from "styled-components";

const Styledinput = ({ placeholder }: { placeholder?: string }) => {
  return <Input placeholder={placeholder} />;
};

export default Styledinput;

const Input = styled.input`
  width: 100%;
  background: #ffffff;
  border: none;
  border-bottom: 1px solid #454545;

  &::placeholder {
    color: #000000;
  }

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #454545;
`;
