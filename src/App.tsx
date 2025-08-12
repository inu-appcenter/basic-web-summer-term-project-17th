import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from './pages/Homepage';
import LoginPage from "./pages/Login_Page";
import RegistPage from "./pages/Regist_page";
import ListPage from "./pages/Member_list_page";
import InfoPage from "./pages/Member_info_page";
import InfoEditPage from "./pages/Edit_info_page";
import ProblemSubmitPage from "./pages/Problem_submit_page";
import MyPage from "./pages/My_page";
import ProblemEditPage from "./pages/Problem_edit_page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Homepage/>}/>
          <Route path={"/home"} element={<Homepage/>}></Route>
          {/* 홈페이지 */}
          <Route path={"/login"} element={<LoginPage/>}></Route>
          {/* 로그인페이지 */}
          <Route path={"/regist"} element={<RegistPage/>}></Route>
          {/* 회원가입페이지 */}
          <Route path={"/list"} element={<ListPage/>}></Route>
          {/* 회원목록 */}
          <Route path={"/info"} element={<InfoPage/>}></Route>
          {/* 회원정보 */}
          <Route path={"/mypage/edit"} element={<InfoEditPage/>}></Route>
          {/* 내정보수정 */}
          <Route path={"/problem/submit"} element={<ProblemSubmitPage/>}></Route>
        {/* 과제제출 */}
          <Route path={"/mypage"} element={<MyPage/>}></Route>
          {/* 마이페이지 */}
          <Route path={"/problem/edit"} element={<ProblemEditPage/>}></Route>
          {/* 과제수정 */}
          
      </Routes>
    </BrowserRouter>
  )
}

export default App