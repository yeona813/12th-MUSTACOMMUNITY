import React from "react";
import styled from "styled-components";
import { Body1, Body2 } from "../../styles/font";
import circleLikeIcon from "../../assets/icon/icon-like-circle.svg";
function DetailPostSection() {
  return (
    <DetailPostSectionWrapper>
      <div className="title">얘들아 안녕</div>
      <div className="writer">
        <Body1>정인영</Body1>
      </div>
      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tortor
        erat. Duis tincidunt felis tellus, et tincidunt lacus vulputate eu.
        Praesent hendrerit, tortor ac euismod volutpat, ligula massa lacinia
        dui, sed rhoncus nibh turpis vel lectus. Sed nunc quam, egestas
        facilisis dolor eget, ornare dictum libero. Phasellus est felis,
        suscipit quis aliquam sit amet, euismod a elit. Morbi quis purus a lorem
        laoreet tincidunt. Nunc porttitor non turpis eu suscipit. Sed et velit
        ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Fusce faucibus sapien a rutrum porttitor. Fusce
        dictum ligula ut arcu dictum consectetur. Morbi nunc tellus, tempor nec
        posuere non, gravida vitae ante. Suspendisse turpis diam, porttitor eget
        rhoncus nec, mattis quis tortor. Phasellus aliquam blandit mi, ac auctor
        lectus viverra nec.
      </div>
      <LikeSection>
        <LikeButton src={circleLikeIcon} alt="좋아요 아이콘" />
        <LikeCount>10</LikeCount>
      </LikeSection>
    </DetailPostSectionWrapper>
  );
}

const DetailPostSectionWrapper = styled.section`
  padding: 2rem 4.8rem;
  .title {
    font-weight: 600;
    font-size: 1.8rem;
  }
  .writer {
    margin-top: 1rem;
  }
  .content {
    margin-top: 1rem;
    font-size: 1.2rem;
    line-height: 130%;
  }
`;

const LikeSection = styled.section`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const LikeButton = styled.img`
  width: 8rem;
  cursor:pointer;
`;
const LikeCount = styled.div`
  font-family: "GmarketSans";
  font-weight: 600;
  font-size: 1.5rem;
`;
export default DetailPostSection;
