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

const putDates = ({ dateFROM, dateTO }) => {
  let message = "";
  if (dateFROM === "" && dateTO === "") {
    message = "Any date";
  } else if (new Date(dateFROM).getTime() > new Date(dateTO).getTime()) {
    message = "Invalid range of dates";
  } else if (dateFROM !== "" && dateTO === "") {
    message = `From ${Days[new Date(dateFROM + " 00:00:00").getDay()]}
    ${new Date(dateFROM + " 00:00:00").getDate()} of
    ${Months[(dateFROM + " 00:00:00").getMonth()]} of
    ${new Date[new Date(dateFROM + " 00:00:00".getFullYear())]()}`;
  } else if (dateFROM === "" && dateTO !== "") {
    message = `To ${Days[new Date(dateTO + " 00:00:00".getDay())]}
    ${new Date(dateTO + " 00:00:00".getDate())} of
    ${Months[new Date(dateTO + " 00:00:00").getMonth()]} of
    ${new Date(dateTO + " 00:00:00").getFullYear()}`;
  } else if (dateFROM !== "" && dateTO !== "") {
    message = `From ${Days[new Date(dateFROM + "00:00:00").getDay()]}
    ${new Date(dateFROM + " 00:00:00").getDate()} of
    ${Months[new Date(dateFROM + " 00:00:00").getMonth()]} of
    ${new Date(dateFROM + " 00:00:00").getFullYear()} 

    to ${Days[new Date(dateTO + " 00:00:00").getDay()]}

    ${new Date(dateTO + " 00:00:00").getDate()} of 
    ${Months[new Date(dateTO + " 00:00:00").getMonth()]} of 
    ${new Date(dateTO + " 00:00:00").getFullYear()}`;
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
      {new Date(availabilityFrom).getDate()} of{" "}
      {Months[new Date(availabilityFrom).getMonth()]} of{" "}
      {new Date(availabilityFrom).getFullYear()}
    </>
  );
};

const getDateTo = ({ availabilityTo }) => {
  return (
    <>
      From {Days[new Date(availabilityTo).getDay()]},{" "}
      {new Date(availabilityTo).getDate()} of{" "}
      {Months[new Date(availabilityTo).getMonth()]} of{" "}
      {new Date(availabilityTo).getFullYear}
    </>
  );
};

const checkDate = () => {
  let dateFrom = new Date().setHours(0, 0, 0, 0);
  let dateTo = new Date().setHours(0, 0, 0, 0);
  if (dateFrom > dateTo) {
    return true;
  } else {
    return false;
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