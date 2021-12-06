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
import { animationVariants } from "../../animations";
import { motion } from "framer-motion";
import BookmarkStar from "../utils/BookmarkStar";

const DesktopCardLayout = ({ characters, bookmarks, updateBookmarks }) => {
  return (
    <LaptopCardLayoutContainer>
      {characters.map((character) => {
        return (
          <motion.div id={character.id} initial="hidden" animate="visible" variants={animationVariants}>
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
