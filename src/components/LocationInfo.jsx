import React from "react";
import './styles/location.css'

const LocationInfo = ({ location }) => {
  return (
    <article className="location">
      <h2 className="locationTitle">{location?.name}</h2>
      <ul className="locationList">
        <li className="locationItem">
          <span>Type: </span>
          {location?.type}
        </li>
        <li className="locationItem">
          <span>Dimension: </span>
          {location?.dimension}
        </li>
        <li className="locationItem">
          <span>Population: </span>
          {location?.residents.length}
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
