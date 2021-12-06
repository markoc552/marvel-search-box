import React, { useState } from "react";
import {
  AccordionContainer,
  AccordionTitle,
  AccordionContent,
} from "./StyledComponents";
import { useMediaQuery } from "@react-hook/media-query";
import { Icon, Checkbox } from "semantic-ui-react";
import { animationVariants } from "../../animations";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";

const Accordion = (props) => {
  
  const [isActive, setIsActive] = useState(true);
  const mobileOnly = useMediaQuery("only screen and (max-width: 600px)");

  const getIconName = (title) => {
    return title === "sidemenu.comics"
      ? "copy"
      : title === "sidemenu.stories"
      ? "window restore"
      : title === "sidemenu.events"
      ? "eye"
      : "filter";
  };

  return (
    <AccordionContainer>
      <AccordionTitle
        onClick={() => setIsActive(!isActive)}
        style={{
          borderRight: isActive && !mobileOnly ? "3px solid red" : "",
          borderBottom: isActive && mobileOnly ? "3px solid red" : "",
        }}
      >
        <Icon
          size="large"
          color={isActive ? "red" : "black"}
          name={getIconName(props.title)}
        />
        <div style={{ margin: "0 auto" }}>
          <FormattedMessage id={props.title} />
        </div>
      </AccordionTitle>
      {isActive && (
        <motion.div
          style={{ margin: "auto auto" }}
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          <AccordionContent>
            {props.content.map((filter, id) => {
              return (
                <div id={id}>
                  <Checkbox style={{ marginRight: 10 }} />
                  {filter.title}
                </div>
              );
            })}
          </AccordionContent>
        </motion.div>
      )}
    </AccordionContainer>
  );
};

export default Accordion;
