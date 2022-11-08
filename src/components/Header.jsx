import React from "react";
import "../styles/header.css";
import {
  putDates,
  putCountries,
  putPrices,
  putSizes
} from "../functions/functions";

const Header = ({ filteredValues }) => {
  const dateValue = putDates(filteredValues);
  const countryValue = putCountries(filteredValues);
  const priceValue = putPrices(filteredValues);
  const sizeValue = putSizes(filteredValues);

  return (
    <div className="header-container">
      <div className="header">
        <div className="title-container">
          <h1>Aloha Travels</h1>
        </div>
        <div className="input-container">
          <p
            className={
              dateValue === "Invalid range of dates" ? "alert" : "no-alert"
            }
          >
            {dateValue}
          </p>
          <p>{countryValue}</p>
          <p>{priceValue}</p>
          <p>{sizeValue}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;