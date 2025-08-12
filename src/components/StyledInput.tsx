import styled from "styled-components";

const StyledInput = ({ placeholder }: { placeholder?: string }) => {
  return <Input placeholder={placeholder} />;
};
export default StyledInput;

const Input = styled.input`
  width: 100%;
  background: #ffffff;
  border: none;
  border-bottom: 1px solid #454545;

  //글씨관련
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #565656;
`;
