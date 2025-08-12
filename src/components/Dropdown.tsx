import styled from "styled-components";

const Dropdown=()=>{
    return(
        <Wrapper>
                    <select> 
                        <option value="">선택하세요</option>
                        <option value="Basic">Basic</option>
                        <option value="Server">서버</option>
                        <option value="Web">웹</option> 
                        <option value="Android">안드로이드</option> 
                        <option value="iOS">iOS</option> 
                        <option value="Design">디자인</option> 
                    </select>
        </Wrapper>
    )
}
export default Dropdown;

const Wrapper = styled.div`

`