import React, { Component } from 'react';
import Logo from './components/Logo/Logo'
import Results from './components/Results/Results'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      artist: '',
      results: []
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  
  handleSearch(e){
    if(e.keyCode === 13){
      axios.get(`https://itunes.apple.com/search?term=${this.state.artist}`)
      .then(res => {
		    this.setState({
          results: res.data.results
        })
	    })
    }
  }

  handleInput(e) {
    this.setState({artist: e.target.value})
  }

  render() {
    const resultsArr = this.state.results.map((e, i) => {
      return (
        <Results key={i}
                 play={e.previewUrl}
                 song={e.trackName}
                 artist={e.artistName}
                 collection={e.collectionName}
                 albumArt={e.artworkUrl60}
                 type={e.kind}
                 singlePrice={e.trackPrice}
                 collectionPrice={e.collectionPrice}/>
      )
    })
    return (
      <div className="main-container">
        <div className="search-container">
         <Logo/>
          <input placeholder="Search iTunes"
                 onChange={this.handleInput}
                 onKeyDown={this.handleSearch}
                 value={this.state.artist}/>
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
