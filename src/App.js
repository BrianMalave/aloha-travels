import React, { useState } from "react";
import { Locations, Prices, Sizing } from "../src/functions/vars";
import Header from "../src/components/Header";
import Filters from "../src/components/Filters";
import Hotels from "../src/components/Hotels.jsx";
import hotelsData from "./data.js";
import filteredHotels from "./functions/filteredHotels";
import notfound from "./icons/notfound.jpg";
import "./styles/app.css";

export default function App() {
  const initState = {
    dateFrom: "",
    dateTo: "",
    countries: Locations.Con,
    prices: Prices,
    sizes: Sizing.Si
  };

  const [filters, setFilters] = useState(initState);
  let filterList = filteredHotels(hotelsData, filters);

  return (
    <div className="App">
      <Header filteredValues={filters} />
      <Filters filteredValues={filters} setFilters={setFilters} />
      {filterList.length > 0 ? (
        <>
          <div className="card-container">
            {filterList.map((data, i) => {
              return (
                <Hotels
                  key={i}
                  slug={data.slug}
                  name={data.name}
                  photo={data.photo}
                  description={data.description}
                  availableFrom={data.availabilityFrom}
                  availableTo={data.availabilityTo}
                  rooms={data.rooms}
                  city={data.city}
                  country={data.country}
                  price={data.price}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="card-container-three">
          <p className="notfound-text">
            I'm sorry, we didn't find what you're looking for. Let's try
            something else! :D
          </p>
          <img className="notfound" src={notfound} alt="not-found" />
        </div>
      )}
    </div>
  );
}