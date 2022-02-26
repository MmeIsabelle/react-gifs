import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.selected(this.props.id);
  }

  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/200w.gif`
    return (
      <img className="gif" src={src} 
      onClick={this.handleClick}/>
    );
  }
}

export default Gif;