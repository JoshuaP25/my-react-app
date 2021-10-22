import React from 'react';
import './Venue.css';

class Venue extends React.Component {
    render() {
        return (
            <div className="Venue">
                <h4>{this.props.venue.name}</h4>
                <img src={`${this.props.venue.prefix}bg_64${this.props.venue.suffix}`} className="venue-image" alt=""/>
                <h5>Address:</h5>
                <p>{this.props.venue.address}</p>
                <p>{this.props.venue.city}</p>
                <p>{this.props.venue.country}</p>
            </div>
        );
    }
};

export default Venue;