import React from "react";
import styled from "styled-components";
import PostItem from "./PostItem";

function PostListSection() {
  return (
    <PostItemContainer>
      <ScrollContainer>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </ScrollContainer>
    </PostItemContainer>
  );
}

const PostItemContainer = styled.div`
  padding: 1.5rem;
`;

const ScrollContainer = styled.div`
  height: calc(100vh - 16rem);
  overflow: scroll;
`;

export default PostListSection;
