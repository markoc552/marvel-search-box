import axios from "axios";

import MARVEL_ENDPOINTS from "../../marvel-endpoints";

export const fetchCharacters =
  (nameStartsWith, pageNumber = 0) =>
  async (dispatch) => {
    let response = await axios.get(
      `${
        MARVEL_ENDPOINTS.FETCH_CHARACTERS_URL
      }&nameStartsWith=${nameStartsWith}&offset=${pageNumber * 20}`
    );

    //temp solution because of the problems with Marvel API
    //it is randomly returning empty object which causes application to fail
    //object should contain empty array
    while (response.data.data === undefined) {
      response = await axios.get(
        `${
          MARVEL_ENDPOINTS.FETCH_CHARACTERS_URL
        }&nameStartsWith=${nameStartsWith}&offset=${pageNumber * 20}`
      );
    }

    pageNumber === 0 &&
      dispatch({
        type: "SET_AVAILABLE_PAGES",
        payload: {
          total: response.data.data.total,
          count: response.data.data.count,
        },
      });

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
  let comics = await axios.get(`${MARVEL_ENDPOINTS.FETCH_COMICS_URL}`);
  let events = await axios.get(`${MARVEL_ENDPOINTS.FETCH_EVENTS_URL}`);
  let stories = await axios.get(`${MARVEL_ENDPOINTS.FETCH_STORIES_URL}`);

  //temp solution because of the problems with Marvel API
  //it is randomly returning empty object which causes application to fail
  //object should contain empty array
  while (comics.data.data === undefined) {
    comics = await axios.get(`${MARVEL_ENDPOINTS.FETCH_COMICS_URL}`);
  }

  while (events.data.data === undefined) {
    events = await axios.get(`${MARVEL_ENDPOINTS.FETCH_EVENTS_URL}`);
  }

  while (stories.data.data === undefined) {
    stories = await axios.get(`${MARVEL_ENDPOINTS.FETCH_STORIES_URL}`);
  }

  dispatch({
    type: "FETCH_ALL_FILTERS",
    payload: [
      { title: "sidemenu.comics", content: comics.data.data.results },
      { title: "sidemenu.events", content: events.data.data.results },
      { title: "sidemenu.stories", content: stories.data.data.results },
    ],
  });
};
