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

function tripAdded(trip) {
  console.log(trip)
  return { type: "TRIP_ADDED", trip };
}

function addTrip({ trip }) {
  return dispatch => {
    dispatch(loadingTrips());
    fetch(URL, {
      method: 'POST',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({ trip })
      })
      .then(res => res.json())
      .then(json => dispatch(tripAdded(json)))
  }
}

function tripUpdated(trip) {
  return { type: "TRIP_UPDATED", trip };
}

function updateTrip({ payload, tripId }) {
  return function(dispatch, getState) {
    const trip = getState().trips.find(trip => trip.id === tripId);
    fetch(`${URL}/${tripId}`, {
      method: "PATCH",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        location: payload.location,
        startDate: payload.startDate,
        endDate: payload.endDate,
        notes: payload.notes
      })
    })
    .then(res => res.json())
    .then(trip => dispatch(tripUpdated(trip)))
  }
}

export { changeSearchText, fetchTrips, updateTrip, addTrip }
