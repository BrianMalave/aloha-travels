import { Locations, Prices, Sizing } from "../functions/vars";
import { checkDate } from "../functions/functions";
import "../styles/filters.css";

const Filters = ({ filteredValues, setFilters }) => {
  const updateState = (e) => {
    setFilters({
      ...filteredValues,
      [e.target.name]: e.target.value
    });
  };

  const blankField = (e) => {
    e.preventDefault();

    setFilters({
      dateFrom: "",
      dateTo: "",
      countries: Locations.Con,
      prices: Prices,
      sizes: Sizing.Si
    });
  };

  const checkingDate = checkDate(filteredValues);

  return (
    <div className="filter-container">
      <div className="filter">
        <input
          className={checkingDate ? "change-color" : null}
          placeholder="Any date"
          value={filteredValues.dateFrom}
          onChange={updateState}
          type="date"
          name="dateFrom"
          id="dateFrom"
        ></input>
        <input
          className={checkDate ? "change-color" : null}
          placeholder="Any date"
          value={filteredValues.dateTo}
          onChange={updateState}
          type="date"
          name="dateTo"
          id="dateTo"
        ></input>
        <select
          value={filteredValues.countries}
          onChange={updateState}
          name="countries"
          id="countries"
        >
          <option value={Locations.Con}>Any Country</option>
          <option value={Locations.Arg}>in Argentina</option>
          <option value={Locations.Bra}>in Brazil</option>
          <option value={Locations.Chl}>in Chile</option>
          <option value={Locations.Uru}>in Uruguay</option>
        </select>
        <select
          value={filteredValues.prices}
          onChange={updateState}
          name="prices"
          id="prices"
        >
          <option value="Prices">Any price</option>
          <option value="1">Low priced $</option>
          <option value="2">Comfort $$</option>
          <option value="3">Spectacular $$$</option>
          <option value="4">Luxury $$$$</option>
        </select>
        <select
          value={filteredValues.sizes}
          onChange={updateState}
          name="sizes"
          id="sizes"
        >
          <option value={Sizing.Si}>Any size</option>
          <option value={Sizing.Sm}>Small</option>
          <option value={Sizing.Md}>Medium</option>
          <option value={Sizing.Lr}>Large</option>
        </select>
        <button className="btn" onClick={blankField} type="reset">
          Clear
        </button>
      </div>
    </div>
  );
};
export default Filters;