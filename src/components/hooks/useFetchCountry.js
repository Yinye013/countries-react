import axios from "axios";
import useSWR from "swr";

const useFetchCountry = (input) => {
  const fetcher = async () => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${input}`
    );
    console.log(response.data);
    return response;
  };
  // const allFetcher = async () => {
  //   const all = await axios.get("https://restcountries.com/v3.1/all");
  //   console.log(all);
  //   return all;
  // };

  const { data, error, isLoading } = useSWR(
    [`https://restcountries.com/v3.1/name/${input}`],
    fetcher
  );

  return { data, error, isLoading };
};

export default useFetchCountry;
