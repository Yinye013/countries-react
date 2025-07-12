import axios from "axios";
import useSWR from "swr";

const useFetchRegion = (region) => {
  const fetcher = async () => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/region/${region}`
    );
    console.log(response.data);
    return response;
  };

  // Only fetch if region is provided and not empty
  const shouldFetch =
    region && region.trim() !== "" && region !== "Select Region";

  const { data, error, isLoading } = useSWR(
    shouldFetch ? `https://restcountries.com/v3.1/region/${region}` : null,
    fetcher
  );

  return { data, error, isLoading: shouldFetch ? isLoading : false };
};

export default useFetchRegion;
