import React from "react";
import DetailPostSection from "../components/postdetail/DetailPostSection";
import CommentListSection from "../components/postdetail/CommentListSection";

function PostDetail() {
  return (
    <>
      <DetailPostSection />
      <CommentListSection />
    </>
  );
}

export default PostDetail;
