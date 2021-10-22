import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term)
    }

    handleTermChange(e) {
        this.setState({
            term: e.target.value
        })
    }

    render() {
        return (
            <div className="SearchBar">
                <h2>Where is your next destination</h2>
                <input type="text" onChange={this.handleTermChange} />
                <button className="button" onClick={this.search}>Search</button>
            </div>
        );
    }
};

export default SearchBar;