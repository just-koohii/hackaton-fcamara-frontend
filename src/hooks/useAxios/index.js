import useSWR from 'swr';
import axios from 'axios';

export function useAxios(url) {
  const { data, error } = useSWR(url, async () => {
    const response = await axios.get(url);

    return response.data;
  });

  return { data, error };
}
