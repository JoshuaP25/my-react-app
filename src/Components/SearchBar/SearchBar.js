import React from 'react';
import './SearchBar.css';


function validate(term) {
    return {
        term: term.length === 0
    }
}

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
        const errors = validate(this.state.term);
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        return (
            <div className="SearchBar">
                <h2>Where is your next destination?</h2>
                    <input type="text" placeholder="City Name" onChange={this.handleTermChange} />
                    <button disabled={isDisabled} onClick={this.search}>Search</button>
            </div>
        );
    }
};

export default SearchBar;