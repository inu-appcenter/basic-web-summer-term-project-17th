import styled from "styled-components";
import Header from "../components/Header";
import LoginImg from "../assets/loginimg.svg";
import Button from "../components/Button";
import StyledInput from "../components/StyledInput";
import { useNavigate } from "react-router-dom";

const LoginPage=()=>{
    const navigate = useNavigate();
 return(
   <LoginPageWrapper>
        <Header/>
        <Box>
            <LeftArea src={LoginImg}>

            </LeftArea>
            <RightArea>
                <TitleArea>
                    로그인
                </TitleArea>
                <FormArea>
                    <h3>아이디</h3>
                    <StyledInput placeHolder={"아이디를 입력하세요."}></StyledInput>
                    <h3>비밀번호</h3>
                    <StyledInput placeHolder={"비밀번호를 입력하세요."}></StyledInput>
                </FormArea>
                <ButtonArea>
                <Button buttonName={"로그인"} onClick={()=>{navigate("/")}}/>
                </ButtonArea>
                <HelpArea>
                    아직 계정이 없으신가요? <span className="goregister">회원가입</span>
                </HelpArea>
            </RightArea>
        </Box>
   </LoginPageWrapper> 
 )   
}
export default LoginPage;

const LoginPageWrapper=styled.div`
      width:100%;
  height:100%;
  padding:100px 30px 60px 30px;
  box-sizing:border-box;
  

  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap:100px;
  background-color: #FAFAFA;
`
const Box=styled.div`
    width:1096px;
  min-height:600px;
    display: flex;
    flex-direction: row;
  `
const LeftArea=styled.img`
    width:50%;
    object-fit: cover;
`
const RightArea=styled.div`
      width:50%;
  height:100%;
  background-color: white;
      display: flex;
      flex-direction: column;
    gap :100px;
    justify-content: center;
    align-items: center;
    padding: 30px 60px 20px 60px;
    box-sizing: border-box;
`
const TitleArea=styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #454545;
`
const FormArea=styled.div`
    width: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #00499b;
`
const ButtonArea=styled.div`
`
const HelpArea=styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    .goregister{
        color:#00499b;
        cursor: pointer;
    }
`