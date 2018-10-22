import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Navbar from './components/Navbar'
import TripContainer from './containers/TripContainer';
import TripDetail from './components/TripDetail';
import TripDetailForm from './components/TripDetailForm';
import NewTripForm from './components/NewTripForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/trips/new" component={NewTripForm} />

          <Route path="/trips/:tripId/edit" render={data => {
            return (
              <TripDetailForm tripId={data.match.params.tripId} />
            );
          }}
          />

          <Route path="/trips/:tripId" render={data => {
            return (
              <TripDetail tripId={data.match.params.tripId} />
            );
          }}
          />

          <Route path="/" component={TripContainer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
