/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import CountryCard from "./CountryCard";
import useFetchCountry from "./hooks/useFetchCountry";
import useFetchRegion from "./hooks/useFetchRegion";
import { HashLoader } from "react-spinners";
import Pagination from "./Pagination";

const Page = ({ input, selected, darkMode }) => {
  const { data, isLoading } = useFetchCountry(input);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  // if (
  //   document.body.style.color === "#fff" &&
  //   document.body.style.backgroundColor === "#23395d"
  // ) {
  //   console.log(setDarkMode(true));
  // }

  //REGION
  const { data: myData, isLoading: isloading } = useFetchRegion(selected);

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
  // ?. - optional chaining means the function should run when the array is defined, in this case, data, filteredCountry and others
  return (
    <div className="container page">
      {isLoading ? (
        <div>
          <HashLoader cssOverride={override} className="hash" />
          <p className="p text-3xl">.... Made by Yinye</p>
        </div>
      ) : (
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

      <ul className="grid grid-cols-1 lg:grid-cols-3 place-items-center mt-24">
        {filteredRegion?.slice(firstPostIndex, lastPostIndex).map((country) => (
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
      <Pagination
        totalPosts={filteredCountry?.length || filteredRegion?.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Page;
