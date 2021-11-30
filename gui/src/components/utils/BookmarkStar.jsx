import React from "react";
import { Icon } from "semantic-ui-react";
import { toast } from "react-toastify";

const BookmarkStar = ({ bookmarks, character, updateBookmarks }) => {
  const onBookmarkClick = (character) => {
    let message;

    if (!bookmarks.includes(character)) {
      updateBookmarks([...bookmarks, character]);
      message = "Character bookmarked!";
    } else {
      var index = bookmarks.indexOf(character);
      bookmarks.splice(index, 1);
      updateBookmarks([...bookmarks]);
      message = "Character removed from bookmarks!";
    }

    toast.info(message, {
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
    <Icon
      onClick={() => onBookmarkClick(character)}
      style={{ margin: "auto auto", cursor: "pointer" }}
      color="yellow"
      size="large"
      corner="bottom right"
      name={bookmarks.includes(character) ? "star" : "star outline"}
    />
  );
};

export default BookmarkStar;
