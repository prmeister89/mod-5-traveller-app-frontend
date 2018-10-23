import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLuggageItem, updateLuggageItems } from '../redux/actions';


class LuggageForm extends Component {
  state = {
    trip_id: parseInt(this.props.tripId),
    qty: null,
    item: ""
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const newItem = this.state;

    const tripId = parseInt(this.props.tripId)

    this.props.addLuggageItem(newItem);
    this.props.history.push("/trips/" + tripId + "/luggage");
  }

  // handleOnChange = e => {
  //   e.preventDefault();
  //
  //   const newItem = this.state;
  //   const luggageArray = [
  //     ...this.props.luggages,
  //     newItem
  //   ];
  //
  //   let payload = {
  //     luggages: luggageArray
  //   };
  //   this.props.updateLuggageItems({
  //     payload,
  //     tripId: parseInt(this.props.tripId)
  //   });
  //   this.props.history.push("/trips/" + parseInt(this.props.tripId) + "/luggage");
  // };

  render() {
    return (
      <form className='ui form' onSubmit={this.handleOnSubmit}>
        <div className='ui horizontal fields'>
          <div className='ui field'>
            <select className='ui fluid dropdown' onChange={e => this.setState({ qty: parseInt(e.target.value) })}>
              <option value="">Qty.</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className='ui field'>
            <input
              className='ui field'
              type='text'
              placeholder='Add Luggage Item'
              value={this.state.item}
              onChange={e => this.setState({ item: e.target.value })}
            />
          </div>
          <button className='ui green basic button' type='submit'>Add</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log(state)
  return {
    specificTrip: state.specificTrip
  }
}

export default withRouter(connect(mapStateToProps, { addLuggageItem, updateLuggageItems })(LuggageForm));
