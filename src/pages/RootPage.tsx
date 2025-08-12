import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function RootPage(){
    return (
        <RootPageWrapper>
            <Outlet/>
        </RootPageWrapper>
    );
}
const RootPageWrapper =styled.div`
  width:100%;
  height:100%;
`