/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
import useFetchCountry from "./hooks/useFetchCountry";
import useFetchRegion from "./hooks/useFetchRegion";
import { HashLoader } from "react-spinners";
import Pagination from "./Pagination";

const Page = ({ input, selected, darkMode }) => {
  const { data, isLoading } = useFetchCountry(input);
  const { data: myData, isLoading: isloadingRegion } = useFetchRegion(selected);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  // Reset current page when search input or region selection changes
  useEffect(() => {
    setCurrentPage(1);
  }, [input, selected]);

  //creating a new array based on data returned with filter - country names
  const filteredCountry = data?.data.filter((country) =>
    country.name.common.toLowerCase()
  );

  //creating a new array based on data returned with filter - regions
  const filteredRegion = myData?.data.filter((region) =>
    region.name.common.toLowerCase()
  );
  console.log(filteredCountry);

  const override = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "inherit",
  };

  // Show loading only when actually fetching data
  const showLoading =
    (input && isLoading) ||
    (selected && selected !== "Select Region" && isloadingRegion);

  // Show content when we have data or when not searching
  const showCountryResults = input && filteredCountry;
  const showRegionResults =
    selected && selected !== "Select Region" && filteredRegion;
  const showNoResults =
    !showLoading &&
    ((input && !filteredCountry) ||
      (selected && selected !== "Select Region" && !filteredRegion));

  return (
    <div className="container page">
      {showLoading ? (
        <div>
          <HashLoader
            cssOverride={override}
            className="hash"
            color={darkMode ? "#fff" : "#23395d"}
          />
          <p className="p text-3xl text-center mt-4">Loading...</p>
        </div>
      ) : (
        <>
          {showCountryResults && (
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center mt-24">
              {filteredCountry
                ?.slice(firstPostIndex, lastPostIndex)
                .map((country) => (
                  <CountryCard
                    key={country.name.common}
                    name={country.name.common}
                    population={country.population}
                    capital={country.capital}
                    img={country.flags.png}
                    region={country.region}
                    filteredCountry={filteredCountry}
                  />
                ))}
            </ul>
          )}

          {showRegionResults && (
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center mt-24">
              {filteredRegion
                ?.slice(firstPostIndex, lastPostIndex)
                .map((country) => (
                  <CountryCard
                    key={country.name.common}
                    name={country.name.common}
                    population={country.population}
                    capital={country.capital}
                    img={country.flags.png}
                    region={country.region}
                    darkMode={darkMode}
                  />
                ))}
            </ul>
          )}

          {showNoResults && (
            <div className="text-center mt-24">
              <p className="text-2xl">
                No countries found. Try a different search term.
              </p>
            </div>
          )}

          {!input && !selected && (
            <div className="text-center mt-24">
              <p className="text-2xl">
                Search for a country by name or select a region to get started.
              </p>
            </div>
          )}

          {(showCountryResults || showRegionResults) && (
            <Pagination
              totalPosts={filteredCountry?.length || filteredRegion?.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Page;
