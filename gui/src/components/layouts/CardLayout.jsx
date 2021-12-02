import React from "react";
import MobileCardLayout from "./MobileCardLayout";
import TabletCardLayout from "./TabletCardLayout";
import DesktopCardLayout from "./DesktopCardLayout";
import { useMediaQuery } from "@react-hook/media-query";
import { useSelector } from "react-redux";

const CardLayout = ({ showBookmarks, bookmarks, updateBookmarks }) => {
  const characters = useSelector((state) => state.characters);

  const mobileOnly = useMediaQuery("only screen and (max-width: 767px)");
  const tabletOnly = useMediaQuery(
    "only screen and (min-width: 768px) and (max-width: 1023px)"
  );
  const desktopOnly = useMediaQuery("only screen and (min-width: 1024px)");

  return (
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
