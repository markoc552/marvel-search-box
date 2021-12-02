import React from "react";
import { Button, Dropdown, Flag } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { useMediaQuery } from "@react-hook/media-query";

const LanguageChanger = () => {
  const isMobileOnly = useMediaQuery("only screen and (max-width: 465px)");

  const dispatch = useDispatch();

  const onLangChange = (lang) => {
    dispatch({ type: "CHANGE_LANG", payload: lang });
  };

  return (
    <Button.Group
      size={isMobileOnly ? "tiny" : "medium"}
      color="red"
      basic
      style={{
        margin: "auto auto",
      }}
    >
      <Dropdown
        text={<FormattedMessage id="lang.changer.label" />}
        icon="globe"
        floating
        labeled
        button
        className="icon"
      >
        <Dropdown.Menu>
          <Dropdown.Header
            icon="globe"
            content={<FormattedMessage id="lang.changer.chooser" />}
          />
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => onLangChange("cro")}>
            <Flag name="croatia" />
            <FormattedMessage id="lang.changer.cro.label" />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => onLangChange("en")}>
            <Flag name="england" />
            <FormattedMessage id="lang.changer.eng.label" />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Button.Group>
  );
};

export default LanguageChanger;
