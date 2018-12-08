import React from 'react';
import { Form, Button, Segment, } from 'semantic-ui-react';

const TripForm = () => (
  <Segment inverted>
  <Form inverted>
    <Form.Field>
      <input placeholder='Trip Name' />
    </Form.Field>
    <Form.Group inline>
      <Form.Field>
        <input placeholder='Start Date' />
      </Form.Field>
      <Form.Field>
        <input placeholder='End Date' />
      </Form.Field>
    </Form.Group>
    
    {/* <Form.Field>
      <input placeholder='City' />
    </Form.Field>
    <Form.Field>
      <input placeholder='State' />
    </Form.Field>
    <Form.Field>
      <input placeholder='Zip' />
    </Form.Field>  */}
    <Button type='submit'>Submit</Button>
  </Form>
  </Segment>
)

export default TripForm