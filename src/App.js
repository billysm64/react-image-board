import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.addImage = this.addImage.bind(this);
    this.state = {
      images: [],
    }
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

  addImage(image){
    const images = [...this.state.images]
    images.push(image);
    this.setState({ images })
  }

  render(){
    return(
      <p>{this.addImage} {this.state.images}</p>
    );
  }
}

export default App;
