import React, { Component } from "react";
import "./App.css";
import { getWeatherByZipCode } from "./lib/getWeatherByZipCode";
import Header from "./components/Header/Header";
import CityTile from "./components/CityTile/CityTile";

class App extends Component {
  state = {
    data: {},
    searchZip: ""
  };

  handleInputChange = event => {
    this.setState({ searchZip: event.target.value });
  };

  handleSubmit = async event => {
    const { searchZip } = this.state;
    event.preventDefault();
    if (searchZip) {
      const res = await getWeatherByZipCode(this.state.searchZip);
      if (res) {
        this.setState({ data: res.data });
      }
    }
  };

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <Header
          onChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
          textValue={data.searchZip}
        />
        {data.weather && (
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <CityTile
              name={data.name}
              icon={data.weather[0].icon}
              temp={data.main.temp}
              desc={data.weather[0].description}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
