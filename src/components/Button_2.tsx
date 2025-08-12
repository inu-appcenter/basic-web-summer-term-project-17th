import styled from "styled-components";
const Button_2=({
    buttonName,
    onClick,
}:{
    buttonName:string; 
    onClick:()=>void;
})=>{
    return<Button_2Wrapper onClick={onClick}>{buttonName}</Button_2Wrapper>
};
    
export default Button_2;
const Button_2Wrapper=styled.button`
    width: 57px;
    height: 27px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 10px;
    background :#FFFFFF;
    border-radius : 30px;
    color: #00499B;
    font-style: Medium;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    cursor: pointer;
    white-space : nowrap;
    border :solid 2px #00499B;
    `;