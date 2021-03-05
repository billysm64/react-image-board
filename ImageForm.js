import React, { Component } from 'react';

class ImageForm extends Component {
  constructor() {
    super(props);
    this.state = {
      caption: '',
      url: '',
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput() {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault(); //prevents page from reload
    this.props.addImage(this.state);
  }

  addImage(image) {
    const images = [...this.state.images];
    images.push(image);
    // this.setState({ images : images })
    this.setState({ images });
    this.setState({ caption: '', url: '' })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="caption">Caption</label>
        <input type="text" id="caption" name="caption" value={this.state.caption} onChange={this.handleInput} required />
        <label htmlFor="url">URL</label>
        <input type="text" id="url" name="url" value={this.state.url} onChange={this.handleInput} required />
        <button type="submit">Add Image</button>
      </form>
    );
  }
}

export default ImageForm;
