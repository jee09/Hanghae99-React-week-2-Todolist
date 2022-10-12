import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import TodoContainer from "../components/TodoContainer";
import Detail from "../pages/Detail";
import Main from "../pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="detail" element={<TodoDetail />} /> */}
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
