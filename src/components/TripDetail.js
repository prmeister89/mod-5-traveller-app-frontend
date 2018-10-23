import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSpecificTrip } from '../redux/actions';


import TripDetailContainer from '../containers/TripDetailContainer';

class TripDetail extends Component {

  componentDidMount() {
    console.log(this.props)
    const tripId = parseInt(this.props.tripId)
    this.props.fetchSpecificTrip(tripId);
  }

  render() {
    if (!this.props.specificTrip) {
      return (
        <div className='ui segment'>
          <div className='ui active dimmer'>
            <div className='ui text loader'>
              Loading Trip List...
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className='ui segments'>
        <div className='ui segment'>
          <h2 className='ui header'>{this.props.specificTrip.location}</h2>
            <div className='ui medium buttons'>
              <Link to={'/trips'}>
                <button className='ui button' type='button'>Back</button>
              </Link>

              <div className='or'></div>

              <Link to={`/trips/${this.props.specificTrip.id}/edit`}>
                <button className='ui button' type='button'>Edit</button>
              </Link>
            </div>
        </div>
        <div className='ui horizontal segments'>
          <div className='ui segment'>
            <h3>From:</h3>
            <p>{this.props.specificTrip.startDateConverted}</p>
          </div>
          <div className='ui segment'>
            <h3>To:</h3>
            <p>{this.props.specificTrip.endDateConverted}</p>
          </div>
        </div>

        <div className='ui segment'>
          <h3>Notes:</h3>
          <p>{this.props.specificTrip.notes}</p>
        </div>
        <div className='ui segment'>
          <TripDetailContainer trip={this.props.specificTrip}/>
        </div>
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

export default withRouter(connect(mapStateToProps, { fetchSpecificTrip })(TripDetail));
