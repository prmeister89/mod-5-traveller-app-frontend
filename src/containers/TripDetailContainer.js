import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import TripDetailNavbar from '../components/TripDetailNavbar';


class TripDetailContainer extends Component {
  render() {
    return(
      <div>
        <TripDetailNavbar />
      </div>
    )
  }
}

export default withRouter(TripDetailContainer);
