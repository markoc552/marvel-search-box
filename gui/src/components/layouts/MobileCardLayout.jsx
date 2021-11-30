import React from "react";
import {
  CharacterCard,
  CardImageContainer,
  CardDescriptionContainer,
  CardBookmarkBar,
  CardCharacterName,
  CardCharacterDescription,
  MobileCardLayoutContainer,
} from "../utils/StyledComponents";
import { Image } from "semantic-ui-react";
import BookmarkStar from "../utils/BookmarkStar";

const MobileCardLayout = ({ characters, bookmarks, updateBookmarks }) => {
  return (
    <MobileCardLayoutContainer>
      {characters.map((character) => {
        return (
          <CharacterCard>
            <CardImageContainer>
              <Image
                style={{
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  width: "70vw",
                  height: "25vh",
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
        );
      })}
    </MobileCardLayoutContainer>
  );
};

export default MobileCardLayout;
