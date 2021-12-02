import React from "react";
import {
  WelcomeContainer,
  WelcomeDialog,
  WelcomeDialogName,
} from "../components/utils/StyledComponents";
import { Button } from "semantic-ui-react";
import { motion } from "framer-motion";
import history from "../history";

const Welcome = () => {
  
  const animationVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35 },
    },
    hidden: { opacity: 0, scale: 1.05 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animationVariants}
    >
      <WelcomeContainer>
        <WelcomeDialog>
          <WelcomeDialogName>
            MARVELBOX<span style={{ color: "red" }}>.</span>
          </WelcomeDialogName>
          <Button
            style={{ margin: "5vh auto" }}
            color="red"
            circular
            onClick={() => history.push("/dashboard")}
          >
            Go to dashboard
          </Button>
        </WelcomeDialog>
      </WelcomeContainer>
    </motion.div>
  );
};

export default Welcome;
