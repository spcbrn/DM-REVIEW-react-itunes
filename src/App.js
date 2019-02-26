import React, { Component } from "react";
import Logo from "./components/Logo/Logo";
import Result from "./components/Result/Result";
import axios from "axios";
import "./App.css";

class App extends Component {
  // 01: set up state

  // 02: method to handle search input

  // 03: method to handle executing the search request
  // 04: plug our search string into the request URL
  // 05: set the search results (from the response data) on state

  render() {
    // 06: render our array of results using the Results component, and pass in all necessary props
    const resultsArr = null;

    return (
      <div className="main-container">
        <div className="search-container">
          <Logo />
          <input placeholder="Search iTunes" />
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
