const URL = "http://localhost:3000/trips";

function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", value: value };
}

function loadingTrips() {
  return { type: "FETCHING_TRIPS" };
}

function loadingSpecificTrip() {
  return { type: "FETCHING_SPECIFIC_TRIP" };
}

function loadingSpecificTripLuggageList() {
  return { type: "FETCHING_SPECIFIC_TRIP_LUGGAGE_LIST" };
}

function loadingSpecificTripFlightInfoList() {
  return { type: "FETCHING_SPECIFIC_TRIP_FLIGHT_INFO_LIST" };
}

function loadingSpecificTripLodgingList() {
  return { type: "FETCHING_SPECIFIC_TRIP_LODGING_LIST" };
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

function tripAdded(trip) {
  return { type: "TRIP_ADDED", trip };
}

function addTrip(trip) {
  return dispatch => {
    dispatch(loadingTrips());
    fetch(URL, {
      method: 'POST',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify(trip)
    })
    .then(res => res.json())
    .then(json => dispatch(tripAdded(json)))
  }
}

function tripUpdated(trip) {
  console.log(trip)
  return { type: "TRIP_UPDATED", trip };
}

function updateTrip({ payload, tripId }) {
  console.log(payload, tripId)
  return dispatch => {
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
    .then(trip => {
      dispatch(tripUpdated(trip))
      dispatch(fetchSpecificTrip(tripId))
    })
  }
}

//LUGGAGE
function fetchedSpecificTripLuggageList(tripLuggageList) {
  return { type: "FETCHED_SPECIFIC_TRIP_LUGGAGE_LIST", tripLuggageList}
}

function fetchSpecificTripLuggageList(tripId) {
  return function(dispatch, getState) {
    const trip = getState().trips.find(trip => trip.id === tripId);
    const tripLuggageList = trip.luggages
    dispatch(loadingSpecificTripLuggageList());
    fetch(`${URL}/${tripId}/luggages`)
      .then(res => res.json())
      .then(trip => dispatch(fetchedSpecificTripLuggageList(tripLuggageList)))
  }
}

//FLIGHT-INFO
function fetchedSpecificTripFlightInfoList(tripFlightInfoList) {
  return { type: "FETCHED_SPECIFIC_TRIP_FLIGHT_INFO_LIST", tripFlightInfoList}
}

function fetchSpecificTripFlightInfoList(tripId) {
  return function(dispatch, getState) {
    const trip = getState().trips.find(trip => trip.id === tripId);
    const tripFlightInfoList = trip.flights
    dispatch(loadingSpecificTripFlightInfoList());
    fetch(`${URL}/${tripId}/flights`)
      .then(res => res.json())
      .then(trip => dispatch(fetchedSpecificTripFlightInfoList(tripFlightInfoList)))
  }
}

//LODGING
function fetchedSpecificTripLodgingList(tripLodgingList) {
  return { type: "FETCHED_SPECIFIC_TRIP_LODGING_LIST", tripLodgingList}
}

function fetchSpecificTripLodgingList(tripId) {
  return function(dispatch, getState) {
    const trip = getState().trips.find(trip => trip.id === tripId);
    const tripLodgingList = trip.lodgings
    dispatch(loadingSpecificTripLodgingList());
    fetch(`${URL}/${tripId}/lodgings`)
      .then(res => res.json())
      .then(trip => dispatch(fetchedSpecificTripLodgingList(tripLodgingList)))
  }
}


//LUGGAGE
function luggageItemAdded(newItem) {
  // console.log("luggageItemAdded function:",newItem)
  return { type: "LUGGAGE_ITEM_ADDED", newItem };
}

function addLuggageItem(newItem) {
  // console.log("addLuggageItem", newItem)
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

//FLIGHT-INFO
function flightInfoAdded(newFlightInfo) {
  console.log("flightInfoAdded function:",newFlightInfo)
  return { type: "FLIGHT_INFO_ADDED", newFlightInfo };
}

function addFlightInfo(flight) {
  console.log("addFlightInfo", flight)
  return dispatch => {
    fetch(`${URL}/${flight.trip_id}/flights`, {
      method: 'POST',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify(flight)
    })
    .then(res => res.json())
    .then(json => dispatch(flightInfoAdded(json)))
  }
}

function flightInfoDeleted(flight) {
  console.log("flightInfoDeleted function:", flight)
  return { type: "FLIGHT_INFO_DELETED", flight };
}

function deleteFlightInfo(flightId, tripId) {
  console.log(flightId, tripId)
  return dispatch => {
    fetch(`${URL}/${tripId}/flights/${flightId}`, {
      method: 'DELETE',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify(flightId)
    })
    .then(res => res.json())
    .then(json => dispatch(flightInfoDeleted(json)))
  }
}

//LODGING
function lodgingAdded(newLodging) {
  console.log("lodgingAdded function:",newLodging)
  return { type: "LODGING_ADDED", newLodging };
}

function addLodging(lodging) {
  console.log("addLodging", lodging)
  return dispatch => {
    fetch(`${URL}/${lodging.trip_id}/lodgings`, {
      method: 'POST',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify(lodging)
    })
    .then(res => res.json())
    .then(json => dispatch(lodgingAdded(json)))
  }
}

function lodgingDeleted(lodging) {
  console.log("lodgingDeleted function:", lodging)
  return { type: "LODGING_DELETED", lodging };
}

function deleteLodging(lodgingId, tripId) {
  console.log(lodgingId, tripId)
  return dispatch => {
    fetch(`${URL}/${tripId}/lodgings/${lodgingId}`, {
      method: 'DELETE',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify(lodgingId)
    })
    .then(res => res.json())
    .then(json => dispatch(lodgingDeleted(json)))
  }
}

export {
  changeSearchText,
  fetchTrips,
  fetchSpecificTrip,
  fetchSpecificTripLuggageList,
  fetchSpecificTripFlightInfoList,
  fetchSpecificTripLodgingList,
  addTrip,
  updateTrip,
  addLuggageItem,
  deleteLuggageItem,
  updateLuggageItems,
  addFlightInfo,
  deleteFlightInfo,
  addLodging,
  deleteLodging
  // updateFlightInfo
}
