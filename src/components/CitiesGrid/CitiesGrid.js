import React from "react";
import CityTile from "../CityTile/CityTile";
import "./CitiesGrid.css";

const CitiesGrid = props => {
  return (
    <div className="cities-grid-wrapper">
      {props.data.map((el, key) => {
        return (
          <CityTile
            name={el.name}
            icon={el.weather[0].icon}
            temp={el.main.temp}
            desc={el.weather[0].description}
            keyName={key}
          />
        );
      })}
    </div>
  );
};

export default CitiesGrid;
