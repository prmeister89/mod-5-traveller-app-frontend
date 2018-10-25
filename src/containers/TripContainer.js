import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Searchbar from '../components/Searchbar';
import TripList from '../components/TripList';

import { fetchTrips } from '../redux/actions';

class TripContainer extends Component {
  state={
    trips: {}
  }

  componentDidMount() {
    this.props.fetchTrips();
  }

  render() {
    return (
      <div className='ui narrow container segment'>
        <Searchbar />

        <NavLink className='item' to={'/trips/new'}>
          <button className='positive ui button'>
          <i className='plus circle icon'></i>
          Create Trip
          </button>
        </NavLink>
        <br></br>
        <br></br>

        <TripList trips={this.props.trips}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    trips: state.trips
  }
}

export default withRouter(connect(mapStateToProps, { fetchTrips })(TripContainer));
