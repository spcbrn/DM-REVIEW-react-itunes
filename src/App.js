import React, { Component } from "react";
import Logo from "./components/Logo/Logo";
import Result from "./components/Result/Result";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      results: []
    };
  }

  handleSearch = e => {
    if (e.keyCode === 13) {
      if (!this.state.searchTerm) return;
      // 01: plug our search string into the request URL
      axios
        .get(`https://itunes.apple.com/search?term=${this.state.searchTerm}`)
        .then(res => {
          // 02: set the search results on state (from the response data object)
          this.setState({
            results: res.data.results,
            searchTerm: ""
          });
        });
    }
  };

  handleInput = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    // 03: render our array of results using the Results component, and pass in all necessary props
    const resultsArr = this.state.results.map(track => {
      return (
        <Result
          key={track.previewUrl}
          preview={track.previewUrl}
          song={track.trackName}
          artist={track.artistName}
          collection={track.collectionName}
          albumArt={track.artworkUrl60}
          type={track.kind}
          singlePrice={track.trackPrice}
          collectionPrice={track.collectionPrice}
        />
      );
    });

    return (
      <div className="main-container">
        <div className="search-container">
          <Logo />
          <input
            placeholder="Search iTunes"
            onChange={this.handleInput}
            onKeyDown={this.handleSearch}
            value={this.state.searchTerm}
          />
        </div>
        <div className="results-container">
          <table>
            <tbody>
              <tr>
                <th>Play</th>
                <th>Song</th>
                <th>Artist</th>
                <th>Collection</th>
                <th>Album Art</th>
                <th>Type</th>
                <th>Single Price</th>
                <th>Collection Price</th>
              </tr>
              {resultsArr}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
