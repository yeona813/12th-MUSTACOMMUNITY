import React, { useState } from "react";
import styled from "styled-components";

function SortToggle() {
  const [sortType, setSortType] = useState("인기순");
  return (
    <>
      <StyledSelect>
        <option>인기순</option>
        <option>최신 순</option>
      </StyledSelect>
    </>
  );
}

const StyledSelect = styled.select`
  font-size: 1.5rem;
  font-family: "GmarketSans";
  outline: none;
  padding: 0.4rem;
  margin-left: 2rem;
`;

export default SortToggle;
