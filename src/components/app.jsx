import React, { Component } from 'react';
import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const gifs = [
      { id: "DICpUSU3ZFSzCnAQ9M" },
      { id: "3fiw51MvIWcGjMhy9a" }
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="DICpUSU3ZFSzCnAQ9M"/>
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={gifs} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;