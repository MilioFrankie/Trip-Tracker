import React from "react";
import { Form, Button, Segment, Divider } from "semantic-ui-react";
  
class TripForm extends React.Component {
  state = { name: "", startDate: "", endDate: "" };

   handleSubmit = e => {
    e.preventDefault();
    this.props.add(this.state.name);
    this.setState({ name: "" });
  };

   handleChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <Segment inverted>
        <Divider horizontal inverted>
          NEW TRIP
        </Divider>
        <Form inverted onSubmit={this.handleSubmit}>
          <Form.Field>
            <input
              placeholder="Trip Name"
              required
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Group widths = 'equal'>
            <Form.Field>
              <input placeholder="Start Date" />
            </Form.Field>
            <Form.Field>
              <input placeholder="End Date" />
            </Form.Field>
          </Form.Group>
          <Divider />
          <Button fluid type='submit' color = 'blue'>Submit</Button>
        </Form>
      </Segment>
    )};
}

export default TripForm;
