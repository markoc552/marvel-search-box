import axios from "axios";

import MARVEL_ENDPOINTS from "../../marvel-endpoints";

export const fetchAllCharacters = (pageNumber) => async (dispatch) => {
  const response = await axios.get(
    `${MARVEL_ENDPOINTS.FETCH_CHARACTERS_URL}&offset=${pageNumber * 20}`
  );

  dispatch({
    type: "FETCH_ALL_CHARACTERS",
    payload: {
      data: response.data.data.results,
      total: response.data.data.total,
      count: response.data.data.count,
    },
  });
};

export const fetchAllFilters = () => async (dispatch) => {
  const comics = await axios.get(`${MARVEL_ENDPOINTS.FETCH_COMICS_URL}`);
  const events = await axios.get(`${MARVEL_ENDPOINTS.FETCH_EVENTS_URL}`);
  const stories = await axios.get(`${MARVEL_ENDPOINTS.FETCH_STORIES_URL}`);

  dispatch({
    type: "FETCH_ALL_FILTERS",
    payload: [
      { title: "sidemenu.comics", content: comics.data.data.results },
      { title: "sidemenu.events", content: events.data.data.results },
      { title: "sidemenu.stories", content: stories.data.data.results },
    ],
  });
};
