import React from "react";
import {
  HeadlineContainer,
  HeadlineName,
  HeadlineItem,
} from "../utils/StyledComponents";
import { Button } from "semantic-ui-react";
import SearchBox from "../utils/SearchBox";
import LanguageChanger from "../utils/LanguageChanger";

const MobileNavigation = ({ showSideMenu, setShowSideMenu }) => {
  return (
    <>
      <HeadlineContainer>
        <HeadlineItem>
          <HeadlineName>
            MARVELBOX<span style={{ color: "red" }}>.</span>
          </HeadlineName>
        </HeadlineItem>
        <HeadlineItem>
          <Button
            basic
            circular
            color="red"
            icon="list"
            style={{ margin: "auto auto" }}
            onClick={() => setShowSideMenu(!showSideMenu)}
          />
          <SearchBox />
          <LanguageChanger />
        </HeadlineItem>
      </HeadlineContainer>
    </>
  );
};

export default MobileNavigation;
