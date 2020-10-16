import React, { Component } from "react";
import { getWeatherByZipCode } from "../../lib/getWeatherByZipCode";
import Search from "../../components/Search/Search";
import CityTile from "../../components/CityTile/CityTile";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const centerItem = { display: "flex", justifyContent: "center" };

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      lastSearchZip: "",
      searchZip: "",
      error: ""
    };
    this.textInput = React.createRef();
  }

  handleInputChange = event => {
    this.setState({ searchZip: event.target.value });
  };

  handleSubmit = async event => {
    const { searchZip, lastSearchZip } = this.state;
    event.preventDefault();
    const msg = "Enter a valid US zip code";

    if (searchZip && searchZip !== lastSearchZip) {
      try {
        const res = await getWeatherByZipCode(searchZip);
        console.log(res);
        if (res) {
          this.setState({
            data: res.data,
            error: "",
            lastSearchZip: searchZip
          });
        }
      } catch (err) {
        console.error(msg);
        this.setState({ error: msg, lastSearchZip: searchZip });
        this.textInput.current.focus();
      }
    } else if (!searchZip) {
      this.setState({ error: msg, lastSearchZip: "" });
      this.textInput.current.focus();
    }
  };

  render() {
    const { data, error } = this.state;
    return (
      <div>
        <Search
          onChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
          textValue={data.searchZip}
          hasError={error}
          inputRef={this.textInput}
        />
        {!error && data.weather && (
          <div style={centerItem}>
            <CityTile
              name={data.name}
              icon={data.weather[0].icon}
              temp={data.main.temp}
              desc={data.weather[0].description}
            />
          </div>
        )}
        {error && (
          <div style={centerItem}>
            <ErrorMessage msg={error} />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
