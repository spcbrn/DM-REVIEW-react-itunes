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

      //01: plug our search string into the request URL
      axios.get(`https://itunes.apple.com/search?term=${this.state.artist}`)
      .then(res => {

        //02: determine path to the array of results we want and put it on state
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

    //03: render our array of results using the Results component, and pass in all necessary props
    const resultsArr = this.state.results.map((c, i) => {
      return (
        <Results key={i}
                 preview={c.previewUrl}
                 song={c.trackName}
                 artist={c.artistName}
                 collection={c.collectionName}
                 albumArt={c.artworkUrl60}
                 type={c.kind}
                 singlePrice={c.trackPrice}
                 collectionPrice={c.collectionPrice }
            />
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
