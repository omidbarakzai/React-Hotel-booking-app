import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";



export default function useFetch(url, query = "") {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      async function fetchData() {
        try {
          setIsLoading(true);
          const { data } = await axios.get(`${url}?${query}`);
          setData(data);
        } catch (err) {
          setData([]);
          alert.error(err?.message);
        } finally {
          setIsLoading(false);
        }
      }
  
      fetchData();
    }, [query, url]);
  
    return { isLoading, data };
  }
  
