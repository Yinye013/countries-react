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

  // Only fetch if input is provided and not empty
  const shouldFetch = input && input.trim() !== "";

  const { data, error, isLoading } = useSWR(
    shouldFetch ? `https://restcountries.com/v3.1/name/${input}` : null,
    fetcher
  );

  return { data, error, isLoading: shouldFetch ? isLoading : false };
};

export default useFetchCountry;
