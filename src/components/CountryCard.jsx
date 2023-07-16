/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

import { Link } from "react-router-dom";
import millify from "millify";

const CountryCard = ({ name, population, capital, img, region }) => {
  return (
    <Link to={`/about/${name}`}>
      <div className="shadow-lg rounded-lg mb-9 cursor-pointer ">
        <img src={img} alt={name} className="w-[350px] h-[213px]" />
        <div className="p-6 text-[1.5rem] tracking-wide">
          <p>
            <span className="font-bold  text-[1.6rem] mb-3 inline-block">
              {name}
            </span>
          </p>
          <p>Population: {millify(population, { precision: 1 })}</p>
          <p>
            Region: <span className="font-semibold">{region} </span>
          </p>
          <p>
            Capital: <span className="font-semibold">{capital} </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
