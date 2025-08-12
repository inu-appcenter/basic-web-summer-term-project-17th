import styled from "styled-components";
interface MenuProps {
  title: string;
  text: string;
}

const Menu_component = ({ title, text }: MenuProps) => {
  return (
    <Menu_component_Wrapper>
      <Area_1>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Area_1>
    </Menu_component_Wrapper>
  );
};
export default Menu_component;
const Menu_component_Wrapper: any = styled.div`
  display: flex;
  justify-content: space-between; //영역 양끝으로 보내기
  flex-direction: row;
  border-bottom: solid 1px #d9d9d9;
  background-color: #ffffff;
`;
const Area_1: any = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 20px;
  font-weight: 700;
  font-style: bold;
  margin: 30px;
  width: 657px;
`;
const Title: any = styled.div`
  font-family: Noto Sans KR;
  font-weight: 700;
  font-style: Bold;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
`;
const Text: any = styled.div`
  font-weight: 500;
  font-style: Medium;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #454545;
`;
