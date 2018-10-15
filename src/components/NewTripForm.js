import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTrip } from '../redux/actions';

class NewTripForm extends Component {
  state = {
    location: "",
    startDate: "",
    endDate: "",
    notes: ""
  }

  handleOnSubmit = (e) => {
    const trip = {
      trip: this.state
    }
    e.preventDefault();
    this.props.addTrip(trip)
    this.props.history.push('/trips')
  }

  handleOnChange = (e) => {
    e.persist();
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div className='ui container'>
      <h4>Create Your Trip</h4>
        <form className='ui form' onSubmit={this.handleOnSubmit}>
          <div>
            <label>Location:</label>
            <input className='ui field' type='text' placeholder='Where are you going?' id='location' value={this.state.location} onChange={this.handleOnChange} />
          </div>
          <div>
            <label>From:</label>
            <input className='ui field' type='text' placeholder='DD-MM-YYYY' id='startDate' value={this.state.startDateConverted} onChange={this.handleOnChange} />
            <label>To:</label>
            <input className='ui field' type='text' placeholder='DD-MM-YYYY' id='endDate' value={this.state.endDateConverted} onChange={this.handleOnChange} />
          </div>
          <div>
            <label>Notes:</label>
            <input className='ui field' type='text' id='notes' value={this.state.notes} onChange={this.handleOnChange} />
          </div>
          <Link to={'/trips'}>
            <button className='ui button' type='button'>Cancel</button>
          </Link>
          <button className='ui button' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}


export default withRouter(connect(null, { addTrip })(NewTripForm));
