import React from 'react';
import Trip from './Trip';

const TripList = ({ trips }) => (
<div>
    { trips.map( trip => 
        <Trip
          key={trip.id} {...trip}
          tripName = { trip.name }
        />
      )
    }
</div>
)

export default TripList;