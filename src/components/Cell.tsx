import styled from "styled-components";
interface CellProp {
  Component: string | number;
}
const Cell = ({ Component }: CellProp) => {
  return (
    <CellWrapper>
      <div>{Component}</div>
    </CellWrapper>
  );
};
export default Cell;
const CellWrapper = styled.div`
  width: 57px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #00499b;
  border-radius: 30px;
  color: #ffffff;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  white-space: nowrap;
`;
