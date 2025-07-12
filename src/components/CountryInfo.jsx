/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Layouts from "./Layouts";
import { BsArrowBarLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import useFetchCountry from "./hooks/useFetchCountry";
import { HashLoader } from "react-spinners";

const CountryInfo = ({ darkMode, setDarkMode }) => {
  const { name } = useParams();
  const { data, isLoading } = useFetchCountry(name);

  const override = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <>
      {isLoading ? (
        <HashLoader
          className="hash"
          cssOverride={override}
          color={darkMode ? "#fff" : "#23395d"}
        />
      ) : (
        <Layouts darkMode={darkMode} setDarkMode={setDarkMode}>
          <div className="container">
            <Link to="/">
              <button className="flex items-center gap-3 shadow-lg mb-10 text-[1.8rem] py-3 px-5">
                <BsArrowBarLeft />
                Back
              </button>
            </Link>
            {data?.data ? (
              data.data.map((country) => (
                <div key={name} className="grid lg:grid-cols-2 py-10">
                  <div>
                    <img
                      src={country.flags.png}
                      alt="country-flag"
                      className="md:w-[300px] md: h-[200px] lg:w-[500px] lg:h-[300px] items-center"
                    />
                    <img
                      src={country.coatOfArms.png}
                      className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] mt-[3rem]"
                      alt="coat of arms"
                    />
                  </div>
                  <div className="country-info">
                    <h1 className="text-[2rem] font-bold lg:text-[5rem] text-center mb-10">
                      {country.name.common}
                    </h1>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-3 text-[1.5rem]">
                        <p>
                          <span className="font-semibold">Official Name: </span>
                          {country.name.official}
                        </p>
                        <p>
                          {" "}
                          <span className="font-semibold">
                            Population:{" "}
                          </span>{" "}
                          {country.population.toLocaleString()}
                        </p>
                        <p>
                          {" "}
                          <span className="font-semibold">Region: </span>{" "}
                          {country.region}
                        </p>
                        <p>
                          {" "}
                          <span className="font-semibold">
                            Subregion:{" "}
                          </span>{" "}
                          {country.subregion}
                        </p>
                        <p>
                          {" "}
                          <span className="font-semibold">Capital: </span>{" "}
                          {country.capital}
                        </p>
                      </div>
                      <div className="flex flex-col gap-3 text-[1.5rem]">
                        <p>
                          {" "}
                          <span className="font-semibold">
                            Top Level Domain:{" "}
                          </span>{" "}
                          {country.tld[0]}
                        </p>
                        <div className="flex gap-2">
                          <span className="font-semibold">Currencies: </span>
                          {Object.values(country.currencies).map((currency) => (
                            <p key={currency.name}>{currency.name}</p>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          <span className="font-bold">Languages:</span>
                          {Object.values(country.languages).map((language) => (
                            <div key={language}>
                              <p className=""> {language}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flexg">
                      <h2 className="flex items-center flex-wrap gap-5 mt-[4.8rem] text-[1.5rem] ">
                        Border Countries:{" "}
                        {country.borders?.map((border) => (
                          <Link key={border} to={`/border/${border}`}>
                            <p className="p-4 shadow-lg">{border}</p>
                          </Link>
                        ))}
                      </h2>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center mt-24">
                <p className="text-2xl">Country not found.</p>
              </div>
            )}
          </div>
        </Layouts>
      )}
    </>
  );
};

export default CountryInfo;
