import { floor } from "lodash-es";

const INITIAL_STATE = {
  characters: [],
  filters: [],
  filter: "",
  availablePages: 0,
  lang: navigator.language.split(/[-_]/)[0],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_ALL_CHARACTERS":
      return {
        ...state,
        characters: action.payload.data,
        availablePages: floor(action.payload.total / action.payload.count),
      };
    case "FETCH_ALL_FILTERS":
      return {
        ...state,
        filters: action.payload,
      };
    case "FILTER_RESULTS":
      return {
        ...state,
        filter: action.payload,
      };
    case "CHANGE_LANG":
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};
