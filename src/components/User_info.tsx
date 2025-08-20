import styled from "styled-components";
import profile from "../assets/image 37.png";
import Cell from "../components/Cell.tsx";
interface InfoProp {
  name: string;
  regist_date: string;
  gen: number;
  part: string;
}

const User_list = ({name, regist_date,gen,part }: InfoProp) => {
  return (
    <User_listWrapper>
      <FirstArea>
        <Image>
          <img src={profile} />
        </Image>
        <SecondArea>
          <div className="line1">{name}</div>
          <Area_4>
            <Cell Component={gen}></Cell>
            <Cell Component={part}></Cell>
          </Area_4>
        </SecondArea>
      </FirstArea>
      <ThirdArea>
        가입일 : <span className="line5">{regist_date}</span>
      </ThirdArea>
    </User_listWrapper>
  );
};
export default User_list;
const User_listWrapper: any = styled.div`
  background-color: #ffffff;
  display: flex;
  gap: 20px;
  width: 750px;
  height: 100px;
  padding: 20px 30px;
  box-sizing: border-box;
  justify-content: space-between;
  border-bottom: solid 1px #d9d9d9;
`;
const FirstArea: any = styled.div`
  display: flex;
  flex-direction: row;
`;
const SecondArea: any = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: 20px;
  font-weight: 700;
  font-style: bold;
  margin: 10px;
`;
const ThirdArea: any = styled.div`
  justify-content: end;
  align-items: end;
  gap: 40px;
  line-height: 200%;
  font-size: 15px;
  font-style: bold;
  font-weight: 500;
`;
const Area_4: any = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const Image: any = styled.div`
  width: 60px;
`;
