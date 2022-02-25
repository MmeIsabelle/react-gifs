import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/200w.gif`
    return (
      <img className="gif" src={src} />
    );
  }
}

export default Gif;