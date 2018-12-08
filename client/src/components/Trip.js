import React from "react";
import { Container, Header, Segment, Icon, Button } from "semantic-ui-react";

class Trip extends React.Component {
  render() {
    return (
      <Container style={{ marginTop: "10px" }}>
        <Segment secondary>
          <Header as="h3">
            <div>
             <Icon name="map marker" color="blue" />
             <p>{this.props.tripName}</p>
            </div>
          </Header>
        </Segment>
      </Container>
    ); //end of return
  } 
} //end of class Trip

export default Trip;
