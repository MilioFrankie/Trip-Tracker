import React, { Component } from 'react';
import axios from "axios";
import Trip from './components/Trip';
import TripList from './components/TripList';
import TripForm from './components/TripForm';
import { Container, Header, Icon, } from "semantic-ui-react";


class App extends Component {
  state = { trips: [] };

  componentDidMount() {
    axios.get("/api/trips")
      .then( res => {
          this.setState({ trips: res.data });
      });
  };
  
  //end of componentDidMount

  // addLocation = (name) => {

  // };//end of addLocation

  // updateLocation = (id) => {

  // };//end of updateLocation

  // deleteLocation = (id) => {

  // };//end of deleteLocation

  render() {
    return (
      <Container >
        <Header 
         as = "h1"
         style = {{margin: "23.5px", color: "blue", fontFamily: "monospace", textAlign: "center"}}
        >
        <Icon name = "map"/>
        triptracker™
        </Header>
        <hr/>
        <Trip />
      </Container>
    );
  }
}

export default App;
