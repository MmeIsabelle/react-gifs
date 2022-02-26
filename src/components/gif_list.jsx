import React, { Component } from 'react';
import Gif from './gif.jsx'

// eslint-disable-next-line react/prefer-stateless-function
class GifList extends Component {
  render() {
    return this.props.gifs.map(gif => {
      return <Gif selected={this.props.selected} id={gif.id} key={gif.id} />;
    });
  }
}

export default GifList;