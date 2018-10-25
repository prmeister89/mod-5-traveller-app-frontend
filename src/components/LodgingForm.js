import React, { Component } from 'react';
import { NavLink, withRouter,  } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLodging } from '../redux/actions';


class LodgingForm extends Component {
  state = {
    trip_id: parseInt(this.props.tripId),
    name: "",
    bookingCode: "",
    checkin: "",
    checkout: "",
    address: "",
    info: ""
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const newLodging = this.state;
    console.log(newLodging)

    const tripId = parseInt(this.props.tripId)

    this.props.addLodging(newLodging);
    this.props.history.push("/trips/" + tripId + "/lodging");
    e.target.reset();
  }
  render() {
    return (
      <div>
        <form className='ui form' onSubmit={this.handleOnSubmit}>
          <div className='ui horizontal segments'>
            <div className='ui segment'>
              <h4 className='ui left floated header'>
              Add Lodging Details
              </h4>
              <button className='ui right floated green basic button' type='submit'>Add</button>
            </div>
          </div>
          <div className='field'>
            <div className='two fields'>
              <div className='twelve wide field'>
                <label>Name</label>
                <input type='text' value={this.state.name} onChange={e => this.setState({ name: e.target.value })}/>
              </div>
              <div className='four wide field'>
                <label>Booking Code</label>
                <input type='text' maxlength='20' value={this.state.bookingCode} onChange={e => this.setState({ bookingCode: e.target.value })}/>
              </div>
            </div>
          </div>
          <div className='field'>
            <label>Address</label>
            <input type='text' value={this.state.address} onChange={e => this.setState({ address: e.target.value })}/>
          </div>
          <div className='two fields'>
            <div className='field'>
              <label>Check-In</label>
              <input type='text' value={this.state.checkin} onChange={e => this.setState({ checkin: e.target.value })}/>
            </div>
            <div className='field'>
              <label>Check-Out</label>
              <input type='text' value={this.state.checkout} onChange={e => this.setState({ checkout: e.target.value })}/>
            </div>
          </div>
          <div className='field'>
            <label>Additional Info</label>
            <textarea type='textarea' value={this.state.info} onChange={e => this.setState({ info: e.target.value })}/>
          </div>
        </form>
        <br></br>
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

export default withRouter(connect(mapStateToProps, { addLodging })(LodgingForm));
