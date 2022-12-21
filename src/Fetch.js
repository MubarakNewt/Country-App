import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [currentCountries, setCurrentCountries] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const [{ currentCountries }] = data;
        // console.log(data);

        setData(data);

        setCurrentCountries(data);
      });
  }, [url]);
  return {
    data,
  };
};

export default useFetch;
// capital,
// continents,
// name,
// population,
// flags,
// subregion,
// borders,
// languages,
// tld,
// currencies,
// currentCountries,
