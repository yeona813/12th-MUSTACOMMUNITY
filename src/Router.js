import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import WritePost from "./pages/WritePost";
import Login from "./pages/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writePost" element={<PostDetail />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/post/:postid" element={<WritePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
