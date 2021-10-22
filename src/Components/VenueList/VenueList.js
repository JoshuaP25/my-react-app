import React from 'react';
import './VenueList.css';
import Venue from '../Venue/Venue';

class VenueList extends React.Component {
    render() {
        return (
            <div className="VenueList">
                {
                    this.props.venues.map(venue => {
                        return (
                            <Venue 
                                venue={venue}
                                key={venue.id}
                            />
                        )
                    })
                }
            </div>
                
        );
    }
};

export default VenueList;