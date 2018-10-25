import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import TripListCard from './TripListCard';

class TripList extends Component {
  state={};

  render() {
    return (
      <div className='ui inverted container'>
        {this.props.loading ?
          <div className='ui segment'>
            <div className='ui active dimmer'>
              <div className='ui text loader'>
              Loading Trip List...
              </div>
            </div>
          </div>
          : null
        }

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
        trip.startDateConverted.toLowerCase().includes(state.searchText.toLowerCase())
    )
  }
}

export default withRouter(connect(mapStateToProps, null)(TripList));
