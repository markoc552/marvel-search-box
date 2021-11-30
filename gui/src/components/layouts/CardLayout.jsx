import React, { useState } from "react";
import MobileCardLayout from "./MobileCardLayout";
import TabletCardLayout from "./TabletCardLayout";
import DesktopCardLayout from "./DesktopCardLayout";
import { useMediaQuery } from "@react-hook/media-query";
import { useSelector } from "react-redux";
import { Loader } from "semantic-ui-react";

const CardLayout = ({ showBookmarks, bookmarks, updateBookmarks, store }) => {
  const mobileOnly = useMediaQuery("only screen and (max-width: 767px)");
  const tabletOnly = useMediaQuery(
    "only screen and (min-width: 768px) and (max-width: 1023px)"
  );
  const desktopOnly = useMediaQuery("only screen and (min-width: 1024px)");

  const [filter, setFilter] = useState("");

  store.subscribe(() => {
    console.log(store.getState().filter);
    setFilter(store.getState().filter);
  });

  const characters = useSelector((state) => {
    const characters = state.characters;

    if (filter !== "")
      return characters.filter((character) =>
        character.name.toLowerCase().startsWith(filter)
      );

    return characters;
  });

  return characters === undefined ? (
    <Loader active style={{ margin: "auto auto" }} inverted content="Loading" />
  ) : (
    <>
      {mobileOnly && (
        <MobileCardLayout
          bookmarks={bookmarks}
          updateBookmarks={updateBookmarks}
          characters={showBookmarks ? bookmarks : characters}
        />
      )}
      {tabletOnly && (
        <TabletCardLayout
          bookmarks={bookmarks}
          updateBookmarks={updateBookmarks}
          characters={showBookmarks ? bookmarks : characters}
        />
      )}
      {desktopOnly && (
        <DesktopCardLayout
          bookmarks={bookmarks}
          updateBookmarks={updateBookmarks}
          characters={showBookmarks ? bookmarks : characters}
        />
      )}
    </>
  );
};

export default CardLayout;
