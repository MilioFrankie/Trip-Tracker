import React, { Component } from "react";
import axios from "axios";
import Trip from "./components/Trip";
import TripList from "./components/TripList";
import TripForm from "./components/TripForm";
import { Container, Header, Icon, Button } from "semantic-ui-react";

class App extends Component {
  state = { trips: [], showForm: false };

  componentDidMount() {
    axios.get("/api/trips").then(res => {
      this.setState({ trips: res.data });
    });
  }

  //end of componentDidMount

  addLocation = name => {
    axios.post("/api/trips", { name }).then(res => {
      const { todos } = this.state;
      this.setState({ todos: [...todos, res.data] });
    });
  };

  // };//end of addLocation

  updateTrip = (id) => {
    axios.put(`/api/trips/${id}`)
      .then( res => {
        const trips = this.state.trips.map( t => {
          if (t.id === id)
            return res.data;
          return t;
        })
        this.setState({ trips, });
      })
  }

  // };//end of updateLocation

  deleteTrip = (id) => {
    axios.delete(`/api/trips/${id}`).then( res => {
        const { trips, } = this.state;
        this.setState({ trips: trips.filter( t => t.id !== id) })
      })
  }

  // };//end of deleteLocation

  toggleForm = () =>
    this.setState({
      showForm: !this.state.showForm
    });

  render() {
    const { showForm } = this.state;

    return (
      <Container>
        <Header
          as="h1"
          color="blue"
          style={{
            margin: "23.5px",
            fontFamily: "monospace",
            textAlign: "center"
          }}
        >
          <Icon name="map" />
          triptracker®
        </Header>
        <hr />
        <Button circular onClick={this.toggleForm}>
          <Icon name={showForm ? "chevron down" : "chevron up"} />
          add trip
        </Button>
        {showForm ? <TripForm add={this.addTrip} /> : null}
        <hr />
        <TripList 
          trips={this.state.trips} 
          remove={this.deleteTrip}
          update={this.updateTrip}
          />
      </Container>
    );
  }
}

export default App;
