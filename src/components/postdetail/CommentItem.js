import React from "react";
import styled from "styled-components";
import { Body2 } from "../../styles/font";
import { Grey1, Grey2 } from "../../styles/color";

function CommentItem() {
  return (
    <CommentItemWrapper>
      <div className="row-1">
        <Body2>정인영</Body2>
        <Body2 color={Grey1}>24.05.20 19:20</Body2>
      </div>
      <div className="content">
        <Body2>
          수고했어 오늘도 수고했어 아무도 나의 슬픔의 관심 없어도 난 늘 응원해
          수고했어 오늘도!
        </Body2>
      </div>
    </CommentItemWrapper>
  );
}

const CommentItemWrapper = styled.div`
  padding: 1.5rem 0 0;
  .row-1 {
    display: flex;
    gap: 1.5rem;
  }
  .content{
    margin-top: 0.5rem;
  }
`;
export default CommentItem;
