import React, { Component } from 'react';
import axios from "axios";
import TripList from './components/TripList';
import { Container, } from "semantic-ui-react";


class App extends Component {
  state = { trips: [] };

  componentDidMount() {
    axios.get("/api/trips")
      .then( res => {
          this.setState({ trips: res.data });
      });
  };//end of componentDidMount

  // addLocation = (name) => {

  // };//end of addLocation

  // updateLocation = (id) => {

  // };//end of updateLocation

  // deleteLocation = (id) => {

  // };//end of deleteLocation

  render() {
    return (
      <>

      </>
    );//end of return
  };//end of render
};//end of Class App

export default App;
