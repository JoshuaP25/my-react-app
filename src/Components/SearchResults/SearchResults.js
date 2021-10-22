import React from 'react';
import './SearchResults.css';
import VenueList from '../VenueList/VenueList';

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h3>Top Attractions</h3>

                <VenueList venues={this.props.venues} />
            </div>
                
        );
    }
};

export default SearchResults;