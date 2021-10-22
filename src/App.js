import './App.css';
import React from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
// import Weather from './Components/Weather/Weather';
import FourSquare from './util/DataApis';
import SearchResults from './Components/SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };

    this.search = this.search.bind(this);
  }

  search(term) {
    FourSquare.search(term).then(result => {
      this.setState({
        result: result
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Wanderlust</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          {/* <Weather /> */}
          <SearchResults venues={this.state.result}/>
        </div>
      </div>
    );
  }
};

export default App;
