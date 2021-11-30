import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (
    <input
      placeholder="Search..."
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        dispatch({ type: "FILTER_RESULTS", payload: e.target.value });
      }}
      style={{
        fontFamily: "'Ubuntu', sans-serif",
        backgroundColor: "#f0f3f5",
        margin: "auto auto",
        width: "22vw",
        padding: "10px",
        border: "1px solid grey",
        borderRadius: "20px",
      }}
    />
  );
};

export default SearchBox;
