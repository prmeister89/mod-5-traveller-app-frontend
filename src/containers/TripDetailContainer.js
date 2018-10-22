import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import TripDetailNavbar from '../components/TripDetailNavbar';
import LuggageList from '../components/LuggageList';

import LuggageForm from '../components/LuggageForm';
import FlightInfo from '../components/FlightInfo';
import Lodging from '../components/Lodging';

class TripDetailContainer extends Component {
  render() {
    return(
      <div className='TripDetailContainer'>
        <TripDetailNavbar />

        <Switch>
          <Route exact path="/trips/:tripId/luggage" render={data => {
            return (
              <div className='ui bottom attached segment'>
                <LuggageForm tripId={data.match.params.tripId} />
                <LuggageList tripId={data.match.params.tripId} />
              </div>
            );
          }}
          />

          <Route exact path="/trips/:tripId/flight-info" render={data => {
            return (
              <div className='ui bottom attached segment'>
                <FlightInfo tripId={data.match.params.tripId} />
              </div>
            );
          }}
          />

          <Route exact path="/trips/:tripId/arrival" render={data => {
            return (
              <div className='ui bottom attached segment'>
                <Lodging tripId={data.match.params.tripId} />
              </div>
            );
          }}
          />
        </Switch>
      </div>
    )
  }
}

export default withRouter(TripDetailContainer);
