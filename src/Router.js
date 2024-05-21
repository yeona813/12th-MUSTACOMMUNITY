import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import WritePost from "./pages/WritePost";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writePost" element={<WritePost />} />
        <Route path="/post/:postid" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
