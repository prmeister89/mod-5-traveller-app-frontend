import React, { Component } from 'react';
import { Route, Switch, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Searchbar from '../components/Searchbar';
import TripList from '../components/TripList';
import TripDetail from '../components/TripDetail';
import NewTripForm from '../components/NewTripForm'

import { fetchTrips } from '../redux/actions';

class TripContainer extends Component {

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

        <TripList />
      </div>
    )
  }
}

export default withRouter(connect(null, { fetchTrips })(TripContainer));
