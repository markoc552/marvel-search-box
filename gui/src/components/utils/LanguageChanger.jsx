import React from "react";
import { Button, Dropdown, Flag } from "semantic-ui-react";
import { useDispatch } from "react-redux";

const LanguageChanger = () => {
  const dispatch = useDispatch();

  const onLangChange = (lang) => {
    dispatch({ type: "CHANGE_LANG", payload: lang });
  };

  return (
    <Button.Group
      color="red"
      basic
      circular
      style={{
        margin: "auto auto",
      }}
    >
      <Dropdown
        text="Language"
        icon="globe"
        floating
        labeled
        button
        className="icon"
      >
        <Dropdown.Menu>
          <Dropdown.Header icon="globe" content="Choose language" />
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => onLangChange("cro")}>
            <Flag name="croatia" />
            Croatian
          </Dropdown.Item>
          <Dropdown.Item onClick={() => onLangChange("en")}>
            <Flag name="england" />
            English
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Button.Group>
  );
};

export default LanguageChanger;
