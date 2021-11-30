import React, { useState, useEffect } from "react";
import {
  MainContainer,
  MenuContainer,
  CardContainer,
} from "../components/utils/StyledComponents";
import { Pagination, Loader } from "semantic-ui-react";
import { useMediaQuery } from "@react-hook/media-query";
import Accordion from "../components/utils/Accordion";
import SideMenuNavigation from "../components/navigations/SideMenuNavigation";
import MobileNavigation from "../components/navigations/MobileNavigation";
import DesktopNavigation from "../components/navigations/DesktopNavigation";
import CardLayout from "../components/layouts/CardLayout";
import BookmarkBar from "../components/utils/BookmarkBar";

import { fetchAllCharacters, fetchAllFilters } from "../redux/actions";
import { connect, useSelector } from "react-redux";
import { motion } from "framer-motion";

const Home = (props) => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [loading, setLoadingCharacters] = useState(false);
  const [bookmarks, updateBookmarks] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const mobileOnly = useMediaQuery("only screen and (max-width: 767px)");

  useEffect(() => {
    props.fetchAllCharacters(1);
    props.fetchAllFilters();
  }, []);

  const availablePages = useSelector((state) => state.availablePages);

  const filters = useSelector((state) => state.filters);

  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35 },
    },
    hidden: { opacity: 0, scale: 1.05 },
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
        showBookmarks={showBookmarks}
        bookmarks={bookmarks}
        updateBookmarks={updateBookmarks}
        store={props.store}
      />
    );

  const renderPagination = () =>
    !showBookmarks &&
    !loading && (
      <Pagination
        activePage={activePage}
        totalPages={availablePages !== undefined ? availablePages : 0}
        onPageChange={async (e, { activePage }) => {
          setActivePage(activePage);
          setLoadingCharacters(true);
          await props.fetchAllCharacters(activePage);
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
          <motion.div initial="hidden" animate="visible" variants={variants}>
            <BookmarkBar
              updateBookmarks={updateBookmarks}
              bookmarks={bookmarks}
              showBookmarks={showBookmarks}
              setShowBookmarks={setShowBookmarks}
            />
          </motion.div>
          {renderCardLayout()}
          <motion.div
            style={{ margin: "auto auto" }}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            {renderPagination()}
          </motion.div>
        </CardContainer>
      </MenuContainer>
    </MainContainer>
  );
};

export default connect(null, {
  fetchAllCharacters,
  fetchAllFilters,
})(Home);
