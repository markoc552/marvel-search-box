import React from "react";
import {
  SideMenuContainer,
  HeadlineNameContainer,
  HeadlineName,
} from "../utils/StyledComponents";
import { useSelector } from "react-redux";
import Accordion from "../utils/Accordion";
import { Loader } from "semantic-ui-react";

const SideMenuNavigation = () => {
  const filters = useSelector((state) => state.filters);

  return (
    <SideMenuContainer>
      <HeadlineNameContainer>
        <HeadlineName>
          MARVELBOX<span style={{ color: "red" }}>.</span>
        </HeadlineName>
      </HeadlineNameContainer>
      {filters.length === 0 ? (
        <Loader active style={{ margin: "auto auto" }} size="huge" />
      ) : (
        filters.map(({ title, content }) => {
          return <Accordion title={title} content={content} />;
        })
      )}
    </SideMenuContainer>
  );
};

export default SideMenuNavigation;
