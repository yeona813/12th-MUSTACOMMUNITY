import React from "react";
import styled from "styled-components";
import { Grey1, Grey2 } from "../../styles/color";
import logo from "../../assets/icon/logo.svg";
import login from "../../assets/icon/login.svg";
function Header() {
  return (
    <StyledHeader>
      <div className="logo-section">
        <LogoImg src={logo} />
        <LogoText>멋사 게시판</LogoText>
      </div>
      <LoginImg src={login} />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: ${Grey2};
  border-bottom: ${Grey1};
  height: 55px;
  display: flex;
  align-items: center;
  padding: 20px;
  .logo-section {
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
  }
`;

const LogoText = styled.div`
  font-family: "GmarketSans";
  font-size: 2rem;
  font-weight: 600;
`;

const LogoImg = styled.img`
  height: 40px;
`;

const LoginImg = styled.img`
  margin-left: auto;
  width: 33px;
  cursor: pointer;
`;

export default Header;
