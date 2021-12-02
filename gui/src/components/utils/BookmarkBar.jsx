import React from "react";
import {
  BookmarkBar as BookmarkBarContainer,
  SBText,
} from "./StyledComponents";
import { Label, Button } from "semantic-ui-react";
import { toast } from "react-toastify";
import { FormattedMessage } from "react-intl";
import { useMediaQuery } from "@react-hook/media-query";

const BookmarkBar = ({
  showBookmarks,
  setShowBookmarks,
  bookmarks,
  updateBookmarks,
}) => {
  const isMobileOnly = useMediaQuery("only screen and (max-width: 365px)");

  const onBookmarkDelete = () => {
    updateBookmarks([]);

    toast.info("Bookmarks deleted!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <BookmarkBarContainer>
      <SBText
        onClick={() => setShowBookmarks(false)}
        style={{
          color: !showBookmarks && "red",
          borderBottom: !showBookmarks && "2px solid red",
          fontSize: isMobileOnly && "11px",
        }}
      >
        <FormattedMessage id="bookmarkbar.all" />
      </SBText>
      <SBText
        onClick={() => setShowBookmarks(true)}
        style={{
          color: showBookmarks && "red",
          borderBottom: showBookmarks && "2px solid red",
          fontSize: isMobileOnly && "11px",
        }}
      >
        <FormattedMessage id="bookmarkbar.bookmarked" />
        <Label
          style={{ marginLeft: "4px" }}
          size={isMobileOnly ? "tiny" : "medium"}
          circular
          color="red"
        >
          {bookmarks.length}
        </Label>
      </SBText>
      <Button
        size={isMobileOnly ? "tiny" : "medium"}
        basic
        circular
        onClick={() => onBookmarkDelete()}
        color="red"
        style={{
          margin: "auto 0",
          fontSize: isMobileOnly && "10px",
        }}
      >
        <FormattedMessage id="bookmarkbar.reset" />
      </Button>
    </BookmarkBarContainer>
  );
};

export default BookmarkBar;
