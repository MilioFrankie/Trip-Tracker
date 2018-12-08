import React from 'react';
import { Form, Button, Segment, Divider, } from 'semantic-ui-react';

const TripForm = () => (
  <Segment inverted>
    <Divider horizontal inverted>
      NEW TRIP
    </Divider>
    <Form inverted>
      <Form.Field>
        <input placeholder='Trip Name' />
      </Form.Field>
      <Form.Group widths = 'equal'>
        <Form.Field>
          <input fluid placeholder='Start Date' />
        </Form.Field>
        <Form.Field>
          <input fluid placeholder='End Date' />
        </Form.Field>
      </Form.Group>
      <Divider />
      {/* <Form.Field>
        <input placeholder='City' />
      </Form.Field>
      <Form.Field>
        <input placeholder='State' />
      </Form.Field>
      <Form.Field>
        <input placeholder='Zip' />
      </Form.Field>  */}
      <Button fluid type='submit' color = 'blue'>Submit</Button>
    </Form>
  </Segment>
)

export default TripForm