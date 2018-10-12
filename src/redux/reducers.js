import { combineReducers } from 'redux';


const searchTextReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.value;
    default:
      return state
  }
}

const tripsReducer = (state = [], action) => {
  switch (action.type) {
    case"FETCHED_TRIPS":
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
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  trips: tripsReducer,
  loading: loadingReducer
})

export default rootReducer;
