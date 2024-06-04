import React, { useState } from "react";
import styled from "styled-components";
import { Grey2 } from "../../styles/color";
import { LoginButton } from "../login/LoginSection";
import { instance } from "../../api/instance";
import { useNavigate } from "react-router-dom";

function WritePostSection() {
  //TODOS
  // 1. 글쓰기
  const [input, setInput] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const postWrite = async () => {
    const body = {
      title: input.title,
      content: input.content,
    };
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };
    try {
      const res = await instance.post("board/post-create/", body, { headers });
      if (res.status === 201) {
        navigate("/");
        alert("글 작성 완료!");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <WritePostSectionWrapper>
      <TitleInput
        placeholder="제목을 입력해주세요"
        maxLength={30}
        onChange={(e) => {
          setInput({ ...input, title: e.target.value });
        }}
      />
      <ContentTextArea
        placeholder="내용을 입력해주세요"
        maxLength={200}
        onChange={(e) => {
          setInput({ ...input, content: e.target.value });
        }}
      />
      <PostButton onClick={postWrite}>글 작성하기</PostButton>
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
