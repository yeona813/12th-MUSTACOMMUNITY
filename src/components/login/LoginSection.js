import React from "react";
import styled from "styled-components";
import { Body1, Body2 } from "../../styles/font";
import { Grey1, Grey2, Red, White } from "../../styles/color";

function LoginSection() {
  return (
    <LoginSectionWrapper>
      <div className="id">
        <Body1>아이디</Body1>
        <LoginInput />
      </div>
      <div className="pw">
        <Body1>비밀번호</Body1>
        <LoginInput type="password" />
      </div>
      <LoginButton>로그인</LoginButton>
    </LoginSectionWrapper>
  );
}

const LoginSectionWrapper = styled.div`
  padding: 3.6rem 3.7rem 0;
  .pw {
    margin-top: 2rem;
  }
`;
const StyledLoginSection = styled.section``;

const LoginInput = styled.input`
  display: inline-block;
  width: 100%;
  background-color: ${Grey2};
  padding: 0.3rem 1rem;
  height: 4rem;
  margin-top: 0.6rem;
  border-radius: 1rem;
`;

const LoginButton = styled.button`
  background-color: ${Red};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${White};
  border-radius: 2rem;
  height: 5rem;
  font-size: 2rem;
  font-familty: "GmarketSans";
  margin-top: 2rem;
`;

export default LoginSection;
