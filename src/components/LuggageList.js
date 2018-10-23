import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LuggageForm from './LuggageForm'
import { deleteLuggageItem, fetchSpecificTripLuggageList } from '../redux/actions';


class LuggageList extends Component {
  state = {};

  // componentDidMount() {
  //   this.setState({
  //     specificTrip: this.props.specificTrip
  //   })
  // };

  handleOnDelete = (itemId) => {
    const tripId = this.props.specificTrip.id
    console.log("itemId:", itemId)
    console.log("tripId:", tripId)

    this.props.deleteLuggageItem(itemId, tripId);
    this.props.history.push(`/trips/${tripId}/luggage`);
  }

  render() {
    if (!this.props.specificTrip.luggages) {
      return (
        <div className='ui segment'>
          <div className='ui active dimmer'>
            <div className='ui text loader'>
              Loading Luggage List...
            </div>
          </div>
        </div>
      )
    }
    const trip = this.props.specificTrip;
    // console.log(trip.luggages)
    return (
      <div className='ui middle aligned divided list'>
        <div className='item'>
          <button className='ui right floated red basic button' type='submit'>Delete All</button>
        </div>
        {trip.luggages.map(luggage => (
          <div id={luggage.id} className='item'>
            <NavLink to={`/trips/${this.props.specificTrip.id}/luggage`}>
              <button className='ui right floated icon button' itemId={luggage.id} onClick={e => this.handleOnDelete(luggage.id)}>
                <i className='red remove icon' />
              </button>
            </NavLink>
            <div className='content'>
              {luggage.qty} - {luggage.item}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log(state)
  return {
    specificTrip: state.specificTrip
  }
}

export default withRouter(connect(mapStateToProps, { deleteLuggageItem, fetchSpecificTripLuggageList })(LuggageList));
