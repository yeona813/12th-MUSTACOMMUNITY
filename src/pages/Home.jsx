import React from "react";
import DdaySection from "../components/common/DdaySection";
import SortToggle from "../components/home/SortToggle";
import PostListSection from "../components/home/PostListSection";

function Home() {
  return (
    <>
      <SortToggle />
      <PostListSection />
    </>
  );
}

export default Home;
