import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      caption: "",
      image: "",
    }
    this.addImage = this.addImage.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    const images = [{
      image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Roscoe_Arbuckle_%26_Pat_Sullivan_-_Mar_1921_EH.jpg",
      caption: "Drawing Felix the Cat",
    }, {
      image: "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file&wpvalue=Little Nemo, 1911 (06).png",
      caption: "Little Nemo and the Princess",
    }, {
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Bobby_Bumps_Amusement_Park_promo.jpg",
      caption: "Bobby Bumps and Fido",
    }];
    this.setState({ images: images });
  }

  addImage(event) {
    event.preventDefault();
    const images = [...this.state.images];
    const image = {
      image: this.state.image,
      caption: this.state.caption,
    }
    images.push(image);
    this.setState({ images });
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {


    const images = this.state.images.map(image => (

        <div>
          <img src={image.image} alt="#"/>
          <p>{image.caption}</p>
        </div>

    ));


    return (
      <React.Fragment>
        <form onSubmit={this.addImage} >
          <label htmlFor="image">URL:</label>
          <input id="image" name="image" value={this.state.image} onChange={this.handleInput} />
          <label htmlFor="caption">Caption:</label>
          <input id="caption" name="caption" value={this.state.caption} onChange={this.handleInput} />
          <button type="submit">Add</button>
        </form>
        {images}
      </React.Fragment>
    );
  }
}

export default App;
