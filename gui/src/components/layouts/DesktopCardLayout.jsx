import React from "react";
import {
  CharacterCard,
  CardImageContainer,
  CardDescriptionContainer,
  CardBookmarkBar,
  CardCharacterName,
  CardCharacterDescription,
  LaptopCardLayoutContainer,
} from "../utils/StyledComponents";
import { Image } from "semantic-ui-react";
import { motion } from "framer-motion";
import BookmarkStar from "../utils/BookmarkStar";

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35 },
  },
  hidden: { opacity: 0, scale: 1.05 },
};

const DesktopCardLayout = ({ characters, bookmarks, updateBookmarks }) => {
  return (
    <LaptopCardLayoutContainer>
      {characters.map((character) => {
        return (
          <motion.div initial="hidden" animate="visible" variants={variants}>
            <CharacterCard>
              <CardImageContainer>
                <Image
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    width: "18vw",
                  }}
                  src={`${character.thumbnail.path}/landscape_incredible.jpg`}
                />
              </CardImageContainer>
              <CardDescriptionContainer>
                <CardCharacterName>{character.name}</CardCharacterName>
                <CardCharacterDescription>
                  {character.description}
                </CardCharacterDescription>
              </CardDescriptionContainer>
              <CardBookmarkBar>
                <BookmarkStar
                  character={character}
                  bookmarks={bookmarks}
                  updateBookmarks={updateBookmarks}
                />
              </CardBookmarkBar>
            </CharacterCard>
          </motion.div>
        );
      })}
    </LaptopCardLayoutContainer>
  );
};

export default DesktopCardLayout;
