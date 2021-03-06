import React from "react";
import { Icon } from "semantic-ui-react";
import { toast } from "react-toastify";

const BookmarkStar = ({ character, bookmarks, updateBookmarks }) => {
  
  const onBookmarkUpdate = (character) => {
    if (isBookmarked(character)) {
      const index = bookmarks.indexOf(character);

      bookmarks.splice(index, 1);
      updateBookmarks([...bookmarks]);

      return "Character removed from bookmarks!";
    } else {
      updateBookmarks([...bookmarks, character]);

      return "Character bookmarked!";
    }
  };

  const isBookmarked = (character) => bookmarks.includes(character);

  const onBookmarkClick = (character) => {
    const message = onBookmarkUpdate(character);

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
      name={isBookmarked(character) ? "star" : "star outline"}
    />
  );
};

export default BookmarkStar;
