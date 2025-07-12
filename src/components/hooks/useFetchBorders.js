import axios from "axios";
import useSWR from "swr";

const useFetchBorders = (input) => {
  const fetcher = async () => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/alpha/${input}`
    );
    console.log(response.data);
    return response;
  };

  // Only fetch if input is provided and not empty
  const shouldFetch = input && input.trim() !== "";

  const { data, error, isLoading } = useSWR(
    shouldFetch ? `https://restcountries.com/v3.1/alpha/${input}` : null,
    fetcher
  );

  return { data, error, isLoading: shouldFetch ? isLoading : false };
};

export default useFetchBorders;
