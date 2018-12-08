import React from 'react';
import { Form, Button, Segment, } from 'semantic-ui-react';

const TripForm = () => (
  <Segment inverted>
  <Form inverted>
    <Form.Field>
      <input placeholder='Location' />
    </Form.Field>
    <Form.Field>
      <input placeholder='Street' />
    </Form.Field>
    <Form.Field>
      <input placeholder='City' />
    </Form.Field>
    <Form.Field>
      <input placeholder='State' />
    </Form.Field>
    <Form.Field>
      <input placeholder='Zip' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
  </Segment>
)

export default TripForm