/*import { useState } from 'react'
import Card from './components/Card'
import Header from './components/Header';
import './App.css'*/
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepages from "./pages/Homepages";
import Loginpages from "./pages/Loginpages";
import Signinpages from "./pages/SignInPage";
import Memberlist from "./pages/Memberlist";
import Personalinfo from "./pages/Personalinfo";
import Editinfo from "./pages/Editinfo";
import Submission from "./pages/Submission";
import EditAssignment from "./pages/EditAssignment";
import Mypage from "./pages/Mypage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepages />} />
        <Route path={"/login"} element={<Loginpages />} />
        <Route path={"/signin"} element={<Signinpages />} />
        <Route path={"/memberlist"} element={<Memberlist />} />
        <Route path={"/personalinfo"} element={<Personalinfo />} />
        <Route path={"/editinfo"} element={<Editinfo />} />
        <Route path={"/submission"} element={<Submission />} />
        <Route path={"/editassignment"} element={<EditAssignment />} />
        <Route path={"/Mypage"} element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
