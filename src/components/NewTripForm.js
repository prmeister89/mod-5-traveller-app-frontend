import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTrip } from '../redux/actions';

class NewTripForm extends Component {
  state = {
    location: "",
    startDate: moment(),
    endDate: moment(),
    notes: ""
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    let trip = {
      location: this.state.location,
      startDate: this.state.startDate.format("DD-MM-YYYY"),
      endDate: this.state.endDate.format("DD-MM-YYYY"),
      notes: this.state.notes
    }

    this.props.addTrip(trip)
    this.props.history.push('/trips')
  }

  handleOnChange = (e) => {
    e.persist();
    this.setState({
      [e.target.id]: e.target.value
    })
  }

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
    return (
      <form className='ui form' onSubmit={this.handleOnSubmit}>
        <h4 className='ui dividing header'>Create Your Trip</h4>
        <div className='field'>
          <label>Location</label>
          <input type='text' placeholder='Where are you going?' id='location' value={this.state.location} onChange={this.handleOnChange} />
        </div>
        <div className='two fields'>
          <div className='field'>
            <label>From</label>
            <DatePicker
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
        <Link to={'/trips'}>
          <button className='ui button' type='button'>Cancel</button>
        </Link>
        <button className='ui button' type='submit'>Submit</button>
      </form>
    )
  }
}


export default withRouter(connect(null, { addTrip })(NewTripForm));
