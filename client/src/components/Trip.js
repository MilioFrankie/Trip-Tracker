import React from "react";
import { Container, Header, Segment, Icon } from "semantic-ui-react";

class Trip extends React.Component {
  render() {
    return (
      <Container style={{ padding: "25px" }}>
        <Segment secondary>
          <Header as="h3">
            <Icon name="map marker" color="blue" />
            <h1>{this.props.tripName}</h1>
          </Header>
        </Segment>
      </Container>
    ); //end of return
  } //end of render
} //end of class Trip

export default Trip;
