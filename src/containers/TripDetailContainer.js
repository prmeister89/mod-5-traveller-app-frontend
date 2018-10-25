import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import TripDetailNavbar from '../components/TripDetailNavbar';

import LuggageForm from '../components/LuggageForm';
import LuggageList from '../components/LuggageList';
import FlightInfoForm from '../components/FlightInfoForm';
import FlightInfoList from '../components/FlightInfoList';
import LodgingForm from '../components/LodgingForm';
import LodgingList from '../components/LodgingList';

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
                <FlightInfoList tripId={data.match.params.tripId} />
                <FlightInfoForm tripId={data.match.params.tripId} />
              </div>
            );
          }}
          />

          <Route exact path="/trips/:tripId/lodging" render={data => {
            return (
              <div className='ui bottom attached segment'>
                <LodgingList tripId={data.match.params.tripId} />
                <LodgingForm tripId={data.match.params.tripId} />
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
