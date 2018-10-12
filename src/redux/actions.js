const URL = "http://localhost:3000/trips";

function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", value: value };
}

function loadingTrips() {
  return { type: "FETCHING_TRIPS" };
}

function fetchedTrips(trips) {
  return { type: "FETCHED_TRIPS", trips}
}

function fetchTrips() {
  return dispatch => {
    dispatch(loadingTrips());
    fetch(URL)
      .then(res => res.json())
      .then(trips => dispatch(fetchedTrips(trips)))
  }
}

export { changeSearchText, fetchTrips }
