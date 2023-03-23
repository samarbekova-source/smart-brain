import ParticlesBg from "particles-bg";
import "./App.css";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Logo from "./components/Navigation/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import React, { Component } from "react";
import Rank from "./components/Rank/Rank";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";

// import Clarifai from "clarifai";

// const Clarifai = require("clarifai");

// const app = new Clarifai.App({
//   apiKey: "cc6ee1d7805c4d078dc21c3d7e28854f",
// });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      route: "signin",
      isSignedIn: false,
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    console.log("click");
    // app.models
    //   .predict(
    //     {
    //       id: "face-detection",
    //       name: "face-detection",
    //       version: "6dc7e46bc9124c5c8824be4822abe105",
    //       type: "visual-detector",
    //     },
    //     this.state.input
    //   )
    //   .then((response) => {
    //     console.log("hi", response);
    //     if (response) {
    //       fetch("http://localhost:3000/image", {
    //         method: "put",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //           id: this.state.user.id,
    //         }),
    //       })
    //         .then((response) => response.json())
    //         .then((count) => {
    //           this.setState(Object.assign(this.state.user, { entries: count }));
    //         });
    //     }
    //     this.displayFaceBox(this.calculateFaceLocation(response));
    //   })
    //   .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="App">
        <ParticlesBg
          color="#FFFFFF"
          className="particles"
          type="cobweb"
          num={190}
          bg={true}
        />
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={this.state.isSignedIn}
        />
        {this.state.route === "home" ? (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
          </div>
        ) : this.state.route === "signin" ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
