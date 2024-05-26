import React from "react";
import styled from "styled-components";
import { Grey2 } from "../../styles/color";
import { LoginButton } from "../login/LoginSection";

function WritePostSection() {
  //TODOS
  // 1. 글쓰기 
  return (
    <WritePostSectionWrapper>
      <TitleInput placeholder="제목을 입력해주세요" maxLength={30} />
      <ContentTextArea placeholder="내용을 입력해주세요" maxLength={200} />
      <PostButton>글 작성하기</PostButton>
    </WritePostSectionWrapper>
  );
}
const WritePostSectionWrapper = styled.section`
  padding: 1rem 3.7rem 0;
`;

const TitleInput = styled.input`
  display: inline-block;
  width: 100%;
  background-color: ${Grey2};
  padding: 0.3rem 1rem;
  height: 4rem;
  margin-top: 0.6rem;
  border-radius: 1rem;
`;
const ContentTextArea = styled.textarea`
  display: inline-block;
  width: 100%;
  height: 40rem;
  background-color: ${Grey2};
  padding: 1rem 1rem;
  outline: none;
  border: none;
  resize: none;
  font-family: Pretendard;
  margin-top: 0.6rem;
  border-radius: 1rem;
`;

const PostButton = styled(LoginButton)``;

export default WritePostSection;
