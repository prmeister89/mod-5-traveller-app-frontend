import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class TripDetail extends Component {
  render() {
    if (!this.props.trip) {
      return (
        <div class='ui segment'>
          <div class='ui active dimmer'>
            <div class='ui text loader'>
            Loading Trip...
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <h3>{this.props.trip.location}</h3>
        <h3>Dates</h3>
        <li>{this.props.trip.startDate} - {this.props.trip.endDate}</li>


      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  let trip = state.trips.find(t => t.id === Number(props.tripId))
  return {
    trip: trip
  }
}

export default withRouter(connect(mapStateToProps, null)(TripDetail));
