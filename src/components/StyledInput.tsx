import styled from "styled-components";

type StyledInputProps=React.InputHTMLAttributes<HTMLInputElement>;
const StyledInput=(props : StyledInputProps)=>{
    return<Input{...props}/>;
};
export default StyledInput;
const Input=styled.input`
    width: 100%;
    background-color: #FFFFFF;
    border: none;
    border-bottom: solid 1px #454545;
    
    
    color:#565656;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
`