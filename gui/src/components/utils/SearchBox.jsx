import React, { useState } from "react";
import _ from "lodash";
import { fetchCharacters } from "../../redux/actions";
import { connect, useDispatch } from "react-redux";
import { Input } from "semantic-ui-react";

const SearchBox = (props) => {
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const searchCharacters = _.debounce(async (term) => {
    setLoading(true);
    await props.fetchCharacters(term);
    setLoading(false);
  }, 800);

  const onInputChange = (filter) => {
    setFilter(filter);
    dispatch({ type: "SET_QUERY_FILTER", payload: filter });

    filter === "" &&
      dispatch({
        type: "SET_AVAILABLE_PAGES",
        payload: { total: 0, count: 0 },
      });

    searchCharacters(filter);
  };

  return (
    <Input
      loading={loading}
      icon="search"
      value={filter}
      onChange={({ target }) => onInputChange(target.value)}
      style={{
        fontFamily: "'Ubuntu', sans-serif",
        backgroundColor: "#f0f3f5",
        margin: "auto auto",
        width: "20vw",
        borderRadius: "20px",
      }}
    />
  );
};

export default connect(null, { fetchCharacters })(SearchBox);
