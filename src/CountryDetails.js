import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useFetch from "./Fetch";

const CountryDetails = () => {
  const { cca3 } = useParams();
  const [getName, setGetName] = useState(null);
  const url = "https://restcountries.com/v3.1/all";

  const { data: mainData } = useFetch(url);
  const { data } = useFetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
  // console.log(data && Object.entries(data[0]?.name.nativeName)[0][1].official);
  const navigate = useNavigate();

  // how to navigate through page  in react app ?
  {
    /* <Route path='/products' exact> */
  }

  return (
    <div className="body">
      <div className="button-return">
        <div className="button" onClick={() => navigate(-1)}>
          <span className="arrow">&#8592;</span> <span>Back</span>
        </div>
      </div>

      <div className="details">
        <img src={data && data[0]?.flags?.png} className="img2"></img>
        <div className="main-details">
          <h1>{data && data[0]?.name?.common}</h1>
          <div className="sub-details">
            <div>
              <p>
                Native Name:{" "}
                <span>
                  {data &&
                    Object.entries(data[0]?.name.nativeName)[0][1].official}
                </span>
              </p>
              <p>
                Population: <span>{data && data[0]?.population}</span>
              </p>
              <p>
                Region: <span>{data && data[0]?.region}</span>
              </p>
              <p>
                Sub Region: <span>{data && data[0]?.subregion}</span>
              </p>
              <p>
                Capital: <span>{data && data[0]?.capital[0]}</span>
              </p>
            </div>
            <div>
              <p>
                Top Level Domain: <span>{data && data[0]?.tld[0]}</span>
              </p>
              <p>
                Currencies:
                <span>
                  {data && Object.entries(data[0].currencies)[0][1].name}
                </span>
              </p>
              <p>
                Languages:
                <span>
                  {data &&
                    Object.entries(data[0].languages)
                      .map((val) => val[1])
                      .toString()}
                </span>
              </p>
            </div>
          </div>
          <div className="border-div">
            <p>Border Countries:</p>
            <div className="border-grid">
              {data &&
                data[0]?.borders?.map((val) => (
                  <Link
                    className="border-country"
                    to={`/details/${data && val}`}
                  >
                    <span>
                      {
                        mainData?.filter((vall) => vall.cca3 === val)[0].name
                          .common
                      }
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
// ?.common
