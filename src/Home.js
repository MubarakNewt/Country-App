// import { useEffect, useState } from "react";
import { click } from "@testing-library/user-event/dist/click";
import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import useFetch from "./Fetch";
import { useParams, Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [input, setInput] = useState("");
  const [currentCountries, setCurrentCountries] = useState([]);
  const [option, setOption] = useState("");

  const navigate = useNavigate();

  const url = "https://restcountries.com/v3.1/all";
  let { capital, continents, name, population, flags, data } = useFetch(url);
  const handleDefault = () => {
    if (input === "") return data;
  };

  useEffect(() => {
    setCurrentCountries(data);
  }, [data]);

  const search = () => {
    const newData = data?.filter((val) =>
      val?.name?.common.toLowerCase().includes(input.toLocaleLowerCase())
    );
    setCurrentCountries(newData);
  };

  const searchByRegion = () => {
    // if (option)
    const newRegion = data.filter((val) => val.continents.includes(option));
    setCurrentCountries(newRegion);
  };

  const current = null;

  return (
    <div className="home-page">
      <div className="search-section">
        <div className="search">
          <GoSearch />
          <input
            className="searchCountry"
            placeholder="Search for a country"
            value={input}
            onInput={(e) => {
              setInput(e.target.value);
              search();
              handleDefault();
            }}
          ></input>
        </div>

        <select
          className="options"
          value={option}
          onChange={(e) => {
            setOption(e.target.value);
          }}
          onClick={searchByRegion}
        >
          <option>Filter by Region</option>
          <option>Africa</option>
          <option>South America</option>
          <option>North America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
      <div className="content">
        {currentCountries?.map((val, i) => (
          <div className="country-info" key={val.name?.common}>
            <Link to={`/details/${val.cca3}`}>
              <img src={val.flags?.png} className="img"></img>
              <div className="info">
                <h2>{val.name?.common}</h2>
                <p>Population: {val.population}</p>
                <p>Region: {val.continents}</p>
                <p>Capital: {val.capital}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
