import { Days, Months } from "../functions/vars";
import { Locations, Prices, Sizing, Values } from "../functions/vars";

const putCountries = ({ countries }) => {
  let message = "";
  if (countries === Locations.Con) {
    message = "All Contries";
  } else if (countries === Locations.Arg) {
    message = "In Argentina";
  } else if (countries === Locations.Bra) {
    message = "In Brazil";
  } else if (countries === Locations.Chl) {
    message = "In Chile";
  } else {
    message = "In Uruguay";
  }
  return message;
};

const putPrices = ({ prices }) => {
  let message = "";
  if (prices === Prices) {
    message = "Any prices";
  } else if (prices <= 1) {
    message = Values.Cheap;
  } else if (prices > 1 && prices < 3) {
    message = Values.Comfort;
  } else if (prices > 3) {
    message = Values.Spectacular;
  } else {
    message = Values.Luxury;
  }
  return message;
};

const putSizes = ({ sizes }) => {
  let message = "";
  if (sizes === Sizing.Si) {
    message = "Any sizes";
  } else if (sizes === Sizing.Sm) {
    message = "Small Size";
  } else if (sizes === Sizing.Md) {
    message = "Medium Size";
  } else {
    message = "Large Size";
  }
  return message;
};

const putDates = ({ dateFrom, dateTo }) => {
  let message = "";
  if (dateFrom === "" && dateTo === "") {
    message = "Any Date";
  } else if (new Date(dateFrom).getTime() > new Date(dateTo).getTime()) {
    message = `Invalid rage of dates`;
  } else if (dateFrom !== "" && dateTo === "") {
    message = `From ${Days[new Date(dateFrom + " 00:00:00").getDay()]} 
    ${new Date(dateFrom + " 00:00:00").getDate()}, on
    ${Months[new Date(dateFrom + " 00:00:00").getMonth()]} of 
    ${new Date(dateFrom + " 00:00:00").getFullYear()}`;
  } else if (dateFrom === "" && dateTo !== "") {
    message = `- till ${Days[new Date(dateTo + " 00:00:00").getDay()]} 
    ${new Date(dateTo + " 00:00:00").getDate()}. on 
    ${Months[new Date(dateTo + " 00:00:00").getMonth()]}, on 
    ${new Date(dateTo + " 00:00:00").getFullYear()}`;
  } else if (dateFrom !== "" && dateTo !== "") {
    message = `From ${Days[new Date(dateFrom + " 00:00:00").getDay()]} 
    ${new Date(dateFrom + " 00:00:00").getDate()}, on 
    ${Months[new Date(dateFrom + " 00:00:00").getMonth()]} of 
    ${new Date(dateFrom + " 00:00:00").getFullYear()} - till ${
      Days[new Date(dateTo + " 00:00:00").getDay()]
    } 
    ${new Date(dateTo + " 00:00:00").getDate()}, on 
    ${Months[new Date(dateTo + " 00:00:00").getMonth()]} of 
    ${new Date(dateTo + " 00:00:00").getFullYear()}`;
  }
  return message;
};

const setPrice = ({ price }) => {
  let priceAmount = [];
  for (let i = 0; i < 4; i++) {
    priceAmount.push(
      <p className={i < price ? "colored" : "uncolored"} key={i}>
        $
      </p>
    );
  }
  return priceAmount;
};

const getDateFrom = ({ availabilityFrom }) => {
  return (
    <>
      From {Days[new Date(availabilityFrom).getDay()]},{" "}
      {new Date(availabilityFrom).getDate()} on{" "}
      {Months[new Date(availabilityFrom).getMonth()]} of{" "}
      {new Date(availabilityFrom).getFullYear()}
    </>
  );
};

const getDateTo = ({ availabilityTo }) => {
  return (
    <>
      To {Days[new Date(availabilityTo).getDay()]},{" "}
      {new Date(availabilityTo).getDate()} of{" "}
      {Months[new Date(availabilityTo).getMonth()]} of{" "}
      {new Date(availabilityTo).getFullYear()}
    </>
  );
};

const checkDate = ({ dateFrom, dateTo }) => {
  new Date(dateFrom).setHours(0, 0, 0, 0);
  new Date(dateTo).setHours(0, 0, 0, 0);
  if (dateFrom > dateTo) {
    return dateFrom;
  } else {
    return dateTo;
  }
};

export {
  putCountries,
  putPrices,
  putSizes,
  putDates,
  setPrice,
  getDateFrom,
  getDateTo,
  checkDate
};