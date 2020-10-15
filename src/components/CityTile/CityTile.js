import React from "react";
import "./CityTile.css";

const CityTile = props => {
  const imgSrc = `http://openweathermap.org/img/wn/${props.icon}@2x.png`
  const temp = Math.trunc(props.temp);
  return (
    <div key={props.keyName} className="tile-wrapper">
      <h3 className='tile-city-name'>{props.name}</h3>
      <img src={imgSrc} alt={`${props.desc} icon`} className='tile-icon' />
      <p className='tile-temp'>{temp}<span>&#176;</span></p>
      <p className='tile-desc'>{props.desc}</p>
    </div>
  );
};

export default CityTile;
