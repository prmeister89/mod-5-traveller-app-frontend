import { combineReducers } from 'redux';


const searchTextReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.value;
    default:
      return state
  }
}

const specificTripReducer = (state = {}, action) => {
  console.log("state:", state, "action:", action)
  let newLuggageArray = [];
  let newFlightInfoArray = [];

  switch (action.type) {
    case "FETCHED_SPECIFIC_TRIP":
      return action.trip;
    case "FETCHED_SPECIFIC_TRIP_LUGGAGE_LIST":
      return action.tripLuggageList;
    case "LUGGAGE_ITEM_ADDED":
      newLuggageArray = [...state.luggages, action.newItem];
      return {...state, luggages: newLuggageArray};
    case "LUGGAGE_ITEM_DELETED":
      newLuggageArray = state.luggages.filter(item => item.id !== action.item.id);
      return {...state, luggages: newLuggageArray};
    case "UPDATE_LUGGAGE":
      return [...state.luggages, action.item];
    case "FLIGHT_INFO_ADDED":
      newFlightInfoArray = [...state.flights, action.newFlightInfo];
      return {...state, flights: newFlightInfoArray};
    case "FLIGHT_INFO_DELETED":
      newFlightInfoArray = state.flights.filter(flight => flight.id !== action.flight.id);
      return {...state, flights: newFlightInfoArray};
    default:
      return state;
  }
}

const tripsReducer = (state = [], action) => {
  switch (action.type) {
    case "TRIP_ADDED":
      return [...state, action.trip];
    case "TRIP_UPDATED":
      return state.map(trip => {
        if (trip.id === action.trip.id) {
          return action.trip;
        } else {
          return trip;
        }
      });
    case "FETCHED_TRIPS":
      return action.trips;
    default:
      return state;
  }
}

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case "FETCHING_TRIPS":
      return true;
    case "FETCHED_TRIPS":
      return false;
    case "FETCHING_SPECIFIC_TRIP":
      return true;
    case "FETCHED_SPECIFIC_TRIP":
      return false;
    case "FETCHING_SPECIFIC_TRIP_LUGGAGE_LIST":
      return true;
    case "FETCHED_SPECIFIC_TRIP_LUGGAGE_LIST":
      return false;
    case "FETCHING_SPECIFIC_TRIP_FLIGHT_INFO_LIST":
      return true;
    case "FETCHED_SPECIFIC_TRIP_FLIGHT_INFO_LIST":
      return false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  trips: tripsReducer,
  loading: loadingReducer,
  specificTrip: specificTripReducer
})

export default rootReducer;
