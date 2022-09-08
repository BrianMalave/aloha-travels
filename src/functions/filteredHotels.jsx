import { Locations, Prices, Sizing } from "./vars";

const filteredHotels = (hotelsData, filters) => {
  const { dateFrom, dateTo, countries, prices, sizes } = filters;
  const newHotelsList = hotelsData
    .filter((hotels) => {
      if (dateFrom !== "" && dateTo !== "") {
        return (
          new Date(hotels.availabilityFrom).setHours(0, 0, 0, 0) >=
            new Date(dateFrom + " 00:00:00").getTime() &&
          new Date(hotels.availabilityTo).setHours(0, 0, 0, 0) <=
            new Date(dateTo + " 00:00:00").getTime()
        );
      }
      return hotels;
    })
    .filter(({ country }) => {
      if (countries !== Locations.Con) {
        return country.toUpperCase() === countries.toUpperCase();
      }
      return country;
    })
    .filter(({ price }) => {
      if (prices !== Prices) {
        return price.toString() === prices;
      }
      return price;
    })
    .filter(({ rooms }) => {
      if (sizes !== Sizing.Si) {
        if (sizes === Sizing.Sm) {
          return rooms < 11;
        } else if (sizes === Sizing.Md) {
          return rooms > 10 && rooms < 21;
        } else {
          return rooms > 20;
        }
      }
      return rooms;
    });
  return newHotelsList;
};

export default filteredHotels;