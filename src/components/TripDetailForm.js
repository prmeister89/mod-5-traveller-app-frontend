import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateTrip } from '../redux/actions';

class TripDetailForm extends Component {
  state = {};

  static getDerivedStateFromProps(props, state) {
    if (props.specificTrip && props.specificTrip.id !== state.id) {
      return {
        id: props.specificTrip.id,
        location: props.specificTrip.location,
        startDate: moment(props.specificTrip.startDateConverted),
        endDate: moment(props.specificTrip.endDateConverted),
        notes: props.specificTrip.notes
      };
    }
    return null;
  }

  onSave = e => {
    e.preventDefault();
    let payload = {
      location: this.state.location,
      startDate: this.state.startDate.format("DD-MM-YYYY"),
      endDate: this.state.endDate.format("DD-MM-YYYY"),
      notes: this.state.notes
    };
    this.props.updateTripInfo({
      tripId: this.props.specificTrip.id,
      payload
    });
    this.props.history.push("/trips/" + this.props.specificTrip.id);
  };

  handleOnChange = (e) => {
    e.persist();
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  //DatePicker functions
  handleChangeStart = (e) => {
    this.setState({
      startDate: e
    })
  }

  handleChangeEnd = (e) => {
    this.setState({
      endDate: e
    })
  }

  render() {
    if (!this.props.specificTrip) {
      return (
        <div className='ui segment'>
          <div className='ui active dimmer'>
            <div className='ui text loader'>
            Loading Trip...
            </div>
          </div>
        </div>
      )
    };

    return (
      <form className='ui form' onSubmit={this.onSave}>
        <h4 className='ui dividing header'>Edit Your Trip</h4>
        <div className='field'>
          <label>Location</label>
          <input type='text' id='location' value={this.state.location} onChange={this.handleOnChange} />
        </div>
        <div className='two fields'>
          <div className='field'>
            <label>From</label>
            <DatePicker
              inline
              id='startDate'
              selected={this.state.startDate}
              selectsStart
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleChangeStart}
            />
          </div>
          <div className='field'>
            <label>To</label>
            <DatePicker
              inline
              id='endDate'
              selected={this.state.endDate}
              selectsEnd
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleChangeEnd}
            />
          </div>
        </div>
        <div className='field'>
          <label>Notes:</label>
          <textarea type='text' id='notes' value={this.state.notes} onChange={this.handleOnChange} />
        </div>
        <Link to={`/trips/${this.props.specificTrip.id}`}>
          <button className='ui button' type='button'>Cancel</button>
        </Link>
        <button className='ui button' type='submit'>Submit</button>
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

export default connect(mapStateToProps, { updateTripInfo: updateTrip })(withRouter(TripDetailForm));
