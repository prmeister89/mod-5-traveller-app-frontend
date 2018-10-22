const URL = "http://localhost:3000/trips";

function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", value: value };
}

function loadingSpecificTripLuggageList() {
  return { type: "FETCHING_SPECIFIC_TRIP_LUGGAGE_LIST" };
}

function loadingSpecificTrip() {
  return { type: "FETCHING_SPECIFIC_TRIP" };
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

function fetchedSpecificTrip(trip) {
  return { type: "FETCHED_SPECIFIC_TRIP", trip}
}

function fetchSpecificTrip(tripId) {
  return function(dispatch, getState) {
    const trip = getState().trips.find(trip => trip.id === tripId);
    dispatch(loadingSpecificTrip());
    fetch(`${URL}/${tripId}`)
      .then(res => res.json())
      .then(trip => dispatch(fetchedSpecificTrip(trip)))
  }
}

function fetchedSpecificTripLuggageList(tripLuggageList) {
  return { type: "FETCHED_SPECIFIC_TRIP_LUGGAGE_LIST", tripLuggageList}
}

function fetchSpecificTripLuggageList(tripId) {
  return function(dispatch, getState) {
    const trip = getState().trips.find(trip => trip.id === tripId);
    const tripLuggageList = trip.luggages
    dispatch(loadingSpecificTripLuggageList());
    fetch(`${URL}/${tripId}/luggage`)
      .then(res => res.json())
      .then(trip => dispatch(fetchedSpecificTrip(tripLuggageList)))
  }
}

function tripAdded(trip) {
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

function luggageItemAdded(newItem) {
  console.log("luggageItemAdded function:",newItem)
  return { type: "LUGGAGE_ITEM_ADDED", newItem };
}

function addLuggageItem(newItem) {
  console.log("addLuggageItem", newItem)
  return dispatch => {
    fetch(`${URL}/${newItem.trip_id}/luggages`, {
      method: 'POST',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newItem)
    })
    .then(res => res.json())
    .then(json => dispatch(luggageItemAdded(json)))
  }
}

function luggageItemDeleted(item) {
  console.log("luggageItemDeleted function:", item)
  return { type: "LUGGAGE_ITEM_DELETED", item };
}

function deleteLuggageItem(itemId, tripId) {
  console.log(itemId, tripId)
  return dispatch => {
    fetch(`${URL}/${tripId}/luggages/${itemId}`, {
      method: 'DELETE',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify(itemId)
    })
    .then(res => res.json())
    .then(json => dispatch(luggageItemDeleted(json)))
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

function luggageUpdated(item) {
  return { type: "UPDATE_LUGGAGE", item };
}

function updateLuggageItems({ payload, tripId }) {
  console.log(payload)
  return function(dispatch, getState) {
    // const trip = getState().trips.find(trip => trip.id === tripId);
    fetch(`${URL}/${tripId}`, {
      method: "PATCH",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        luggage: payload.luggageArray
      })
    })
    .then(res => res.json())

    .then(item => console.log(item))
  }
}

export {
  changeSearchText,
  fetchTrips,
  updateTrip,
  addTrip,
  addLuggageItem,
  deleteLuggageItem,
  updateLuggageItems ,
  fetchSpecificTrip,
  fetchSpecificTripLuggageList
}
