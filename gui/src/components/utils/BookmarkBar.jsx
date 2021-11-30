import React from "react";
import {
  BookmarkBar as BookmarkBarContainer,
  SBText,
} from "./StyledComponents";
import { Label, Button } from "semantic-ui-react";

const BookmarkBar = ({
  showBookmarks,
  setShowBookmarks,
  bookmarks,
  updateBookmarks,
}) => {
  return (
    <BookmarkBarContainer>
      <SBText
        onClick={() => setShowBookmarks(false)}
        style={{
          color: !showBookmarks && "red",
          borderBottom: !showBookmarks && "2px solid red",
        }}
      >
        All
      </SBText>
      <SBText
        onClick={() => setShowBookmarks(true)}
        style={{
          color: showBookmarks && "red",
          borderBottom: showBookmarks && "2px solid red",
        }}
      >
        Bookmarked
        <Label style={{ marginLeft: "4px" }} circular color="red">
          {bookmarks.length}
        </Label>
      </SBText>
      <Button
        basic
        circular
        onClick={() => updateBookmarks([])}
        color="red"
        style={{
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        Reset
      </Button>
    </BookmarkBarContainer>
  );
};

export default BookmarkBar;
