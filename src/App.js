import react from "react";
import Homepage from "./components/pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import { Route } from "react-router-dom";
import "./App.css";

class App extends react.Component {
  render() {
    return (
      <div className="App">
        {" "}
        <Header />{" "}
      </div>
    );
  }
}

export default App;
