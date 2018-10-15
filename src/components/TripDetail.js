import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import TripDetailContainer from '../containers/TripDetailContainer';

class TripDetail extends Component {
  render() {
    if (!this.props.trip) {
      return (
        <div className='ui segment'>
          <div className='ui active dimmer'>
            <div className='ui text loader'>
            Loading Trip...
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className='ui segments'>

        <div className='ui segment'>
          <h2 className='ui header'>{this.props.trip.location}</h2>
            <div className='ui medium buttons'>
              <Link to={'/trips'}>
                <button className='ui button' type='button'>Back</button>
              </Link>
              <div className='or'></div>
              <Link to={`/trips/${this.props.trip.id}/edit`}>
              <button className='ui button' type='button'>Edit</button>
              </Link>
            </div>
        </div>
        <div className='ui horizontal segments'>
          <div className='ui segment'>
            <h3>From:</h3>
            <p>{this.props.trip.startDateConverted}</p>
          </div>
          <div className='ui segment'>
            <h3>To:</h3>
            <p>{this.props.trip.endDateConverted}</p>
          </div>
        </div>

        <div className='ui segment'>
          <h3>Notes:</h3>
          <p>{this.props.trip.notes}</p>
        </div>

        <div className='ui segment'>
          <TripDetailContainer />
        </div>
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
