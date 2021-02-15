import React, { Component } from "react";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecgonition from "./components/FaceRecgonition/FaceRecgonition";

const app = new Clarifai.App({
  apiKey: "966aab5427374c7296b15ebdaf6c997c",
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 100,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgUrl: "",
    };
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imgUrl: this.state.input });

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecgonition imgUrl={this.state.imgUrl} />
      </div>
    );
  }
}

export default App;
