import styled from "styled-components";
const Button_3=({
    buttonName,
    // onClick,
}:{
    buttonName:string; 
    // onClick:()=>void;
})=>{
    return<Button_3Wrapper 
    // onClick={onClick}
    >{buttonName}</Button_3Wrapper>
};
    
export default Button_3;
const Button_3Wrapper=styled.button`
    width: 280px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 40px;
    background :#FAAF10;
    border-radius : 30px;
    color: #FFFFFF;
        font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;
`