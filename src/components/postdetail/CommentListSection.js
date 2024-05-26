import React from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";
import { Black, White } from "../../styles/color";

function CommentListSection() {
  return (
    <CommentListSectionWrapper>
      <CommentCount>댓글 4</CommentCount>
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentTextArea placeholder="댓글을 작성해주세요" />
      <PostButton>댓글 작성하기</PostButton>
    </CommentListSectionWrapper>
  );
}

const CommentListSectionWrapper = styled.section`
  padding: 2rem 4rem;
`;

const CommentCount = styled.div`
  font-size: 1.5rem;
  font-family: "GmarketSans";
`;

const CommentTextArea = styled.textarea`
  display: inline-block;
  width: 100%;
  height: 10rem;
  padding: 1rem 1rem;
  outline: none;
  border: 1px solid;
  resize: none;
  font-family: Pretendard;
  margin: 2rem 0 1rem;
  border-radius: 1rem;
`;

const PostButton = styled.button`
  margin-top: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  font-family: "GmarketSans";
  background-color: ${Black};
  color: ${White};
`;
export default CommentListSection;
