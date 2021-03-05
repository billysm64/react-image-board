import React, { Component } from 'react';

import ImageForm from './ImageForm';
import ImageList from './ImageList';

class ImageBoard extends Component {
  constructor(props) {
    super(props);
    this.state {
      images: [],
    }
  }

  componentDidMount() {
    const images = [{
      url: '',
      caption: '',
    }, {
      url: '',
      caption: '',
    }];

    // this.setState({ images: images });
    this.setStates({ images });
    this.addImage = this.addImage.bind(this);
  }

  render() {
    return(
      <div>
        <ImageForm addImages={this.addImage} />
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default ImageBoard;
