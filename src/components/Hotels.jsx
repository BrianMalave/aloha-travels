import React from "react";
import bed from "../icons/bed.svg";
import location from "../icons/location.svg";
import { setPrice, getDateFrom, getDateTo } from "../functions/functions.jsx";
import "../styles/results.css";

const Hotels = (props) => {
  const dateFrom = getDateFrom(props);
  const dateTo = getDateTo(props);
  const price = setPrice(props);

  return (
    <div className="card-container">
      <div className="card-container-two">
        <div className="img-container">
          <img src={props.photo} alt={props.name} />
        </div>
        <h1 className="card-title">{props.name}</h1>
        <p className="card-date">{dateFrom}</p>
        <p className="card-date">{dateTo}</p>
        <p className="card-description">{props.description}</p>
        <div className="location-container">
          <div className="location-icon">
            <img src={location} alt="location icon" />
          </div>
          <p className="location-card">
            {props.country}, {props.city}
          </p>
        </div>
        <div className="rooms-prices-container">
          <div className="rooms-container">
            <div className="rooms-icon">
              <img src={bed} alt="bed icon" />
            </div>
            <div className="rooms-card">{props.rooms} Bedrooms </div>
          </div>
          <div className="prices-card">{price}</div>
        </div>
        <button className="card-btn">Start booking</button>
      </div>
    </div>
  );
};

export default Hotels;