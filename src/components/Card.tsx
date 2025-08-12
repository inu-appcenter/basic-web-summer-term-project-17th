import styled from "styled-components";
import book from "../assets/book.png";
interface CardProps{
    title : string;
    text : string;
}
const Card=({title,text}:CardProps)=>{
    return(
        <CardWrapper>
            <FirstArea>
                <img src={book}/>
            </FirstArea>
            <SecondArea>
                <div className="firstline">{title}</div>
                <div className="secondline">{text}</div>
            </SecondArea>
        </CardWrapper>
    )
}
export default Card;
const CardWrapper :any =styled.div`
    display : flex;
    flex-direction:column;
    gap:40px;
    background:#FFFFFF;
    border-radius:10px;
    width: 300px;
    height:fit-content;
    padding:30px;
    box-sizing:border-box;
`
const FirstArea :any =styled.div`
    width: 100%;
    height:fit-content;
    display:flex;
    justify-content: center;
    align-items:center;
`
const SecondArea :any =styled.div`
    width : 100%;
    height : fit-contents;
    display : flex;
    flex-direction:column;
    gap: 20px;
    .firstline{
        font-style: normal;
        font-weight:700;
        font-size:24px;
        line-height:29px;
        color:#111111;
    }
    .secondline{
        font-style: normal;
        font-weight:400;
        font-size:12px;
        line-height:140%;
        color:#565656;
    }
`
