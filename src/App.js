import './App.css';
import React from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
// import Weather from './Components/Weather/Weather';
import FourSquare from './util/DataApis';
import SearchResults from './Components/SearchResults/SearchResults';
import logo from './images/logo.png';

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
      <div className="App">
        <div className="App-nav">
          <img src={logo} alt="logo" className="App-logo" />
          <h1>Wanderlust</h1>
        </div>
        <div className="App-header">
          <SearchBar onSearch={this.search}/>
          {/* <Weather /> */}
        </div>
        <SearchResults venues={this.state.result}/>
      </div>
    );
  }
};

export default App;
