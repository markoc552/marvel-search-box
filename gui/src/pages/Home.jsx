import React, { useState, useEffect } from "react";
import {
  MainContainer,
  MenuContainer,
  CardContainer,
} from "../components/utils/StyledComponents";
import { Pagination, Loader } from "semantic-ui-react";
import { useMediaQuery } from "@react-hook/media-query";
import { animationVariants } from "../animations"
import Accordion from "../components/utils/Accordion";
import SideMenuNavigation from "../components/navigations/SideMenuNavigation";
import MobileNavigation from "../components/navigations/MobileNavigation";
import DesktopNavigation from "../components/navigations/DesktopNavigation";
import CardLayout from "../components/layouts/CardLayout";
import BookmarkBar from "../components/utils/BookmarkBar";

import { fetchAllFilters, fetchCharacters } from "../redux/actions";
import { connect, useSelector } from "react-redux";
import { motion } from "framer-motion";


const Home = ({ store, fetchAllFilters, fetchCharacters }) => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [bookmarks, updateLocalBookmarks] = useState([]);

  const [loading, setLoadingCharacters] = useState(false);

  const [activePage, setActivePage] = useState(1);
  const [availablePages, setAvailablePages] = useState(0);
  const [filter, setFilter] = useState("");

  const mobileOnly = useMediaQuery("only screen and (max-width: 767px)");

  const bookmarksKey = "msb.bookmarks";

  const unsubscribe = store.subscribe(() => {
    const filter = store.getState().filter;
    const availablePages = store.getState().availablePages;

    setFilter(filter);
    setAvailablePages(availablePages);

    filter !== "" && setShowBookmarks(false);
    filter === "" && setShowBookmarks(true);
  });

  useEffect(() => {
    const bookmarks = JSON.parse(window.localStorage.getItem(bookmarksKey));

    if (bookmarks === null) {
      window.localStorage.setItem(bookmarksKey, JSON.stringify([]));
    } else {
      updateLocalBookmarks(bookmarks);
    }

    fetchAllFilters();

    return unsubscribe()
  }, []);

  const filters = useSelector((state) => state.filters);

  const updateBookmarks = (bookmarks) => {
    updateLocalBookmarks(bookmarks);

    window.localStorage.setItem(bookmarksKey, JSON.stringify(bookmarks));
  };

  const renderMenu = () =>
    mobileOnly ? (
      <MobileNavigation
        setShowSideMenu={setShowSideMenu}
        showSideMenu={showSideMenu}
      />
    ) : (
      <DesktopNavigation />
    );

  const renderSideFilters = () =>
    mobileOnly &&
    showSideMenu &&
    (filters.length === 0 ? (
      <Loader active style={{ margin: "auto auto" }} />
    ) : (
      filters.map(({ title, content }) => {
        return <Accordion title={title} content={content} />;
      })
    ));

  const renderCardLayout = () =>
    loading ? (
      <Loader active size="large" style={{ margin: "auto auto" }} />
    ) : (
      <CardLayout
        showBookmarks={showBookmarks || filter === ""}
        bookmarks={bookmarks}
        updateBookmarks={updateBookmarks}
      />
    );

  const renderPagination = () =>
    !showBookmarks &&
    !loading && (
      <Pagination
        disabled={availablePages === 0}
        activePage={activePage}
        totalPages={availablePages !== undefined ? availablePages : 0}
        onPageChange={async (e, { activePage }) => {
          setActivePage(activePage);
          setLoadingCharacters(true);
          await fetchCharacters(filter, activePage);
          setLoadingCharacters(false);
        }}
      />
    );

  return (
    <MainContainer>
      <SideMenuNavigation />
      <MenuContainer>
        {renderMenu()}
        {renderSideFilters()}
        <CardContainer>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariants}
          >
            <BookmarkBar
              showBookmarks={showBookmarks}
              setShowBookmarks={setShowBookmarks}
              bookmarks={bookmarks}
              updateBookmarks={updateBookmarks}
            />
          </motion.div>
          {renderCardLayout()}
          <motion.div
            style={{ margin: "auto auto" }}
            initial="hidden"
            animate="visible"
            variants={animationVariants}
          >
            {renderPagination()}
          </motion.div>
        </CardContainer>
      </MenuContainer>
    </MainContainer>
  );
};

export default connect(null, { fetchAllFilters, fetchCharacters })(Home);
