import styled from "styled-components";
import profile from "../assets/profile.svg"

const UserInfo = () => {
    return(
        <UserInfoWrapper>
            <img src={profile}/>
            <span className="username">횃불이님</span>
            
        </UserInfoWrapper>
    )
}

export default UserInfo;
const UserInfoWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    gap:12px;
    
    img{
        width: 40px;
        border-radius: 100%;
        background-color: gray;
    }
`