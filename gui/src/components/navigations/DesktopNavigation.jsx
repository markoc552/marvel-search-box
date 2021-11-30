import React from "react";
import { HeadlineContainer, HeadlineItem } from "../utils/StyledComponents";
import SearchBox from "../utils/SearchBox";
import LanguageChanger from "../utils/LanguageChanger";

const DesktopNavigation = () => {
  return (
    <HeadlineContainer>
      <HeadlineItem></HeadlineItem>
      <HeadlineItem>
        <SearchBox />
      </HeadlineItem>
      <HeadlineItem>
        <LanguageChanger/>
      </HeadlineItem>
    </HeadlineContainer>
  );
};

export default DesktopNavigation;
