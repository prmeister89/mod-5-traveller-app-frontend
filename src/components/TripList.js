import React, { Component } from 'react';
import TripListCard from './TripListCard';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class TripList extends Component {
  render() {
    return (
      <div className='ui inverted container'>
        {this.props.loading ?
          <div class='ui segment'>
            <div class='ui active dimmer'>
              <div class='ui text loader'>
              Loading Trip List...
              </div>
            </div>
          </div>
          : null}

        <div className='ui blue cards'>
          {this.props.trips.map(trip => (
            <TripListCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    trips: state.trips.filter(
      trip =>
        trip.location.toLowerCase().includes(state.searchText.toLowerCase()) ||
        trip.notes.toLowerCase().includes(state.searchText.toLowerCase())
    )
  }
}

export default withRouter(connect(mapStateToProps, null)(TripList));
