import { useEffect, useState } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const abortCont = new AbortController();
      let getData = async() =>{
        try {
          let res = await fetch(url, {signal:abortCont.signal})
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          };
          let data = await res.json();
          setIsPending(false);
          setData(data);
          setError(null);
        } catch(err) {
          if (err.name === 'AbortError'){
            console.log('Fetch aborted.')
          }else{
            setIsPending(false);
            setError(err.message);
          };
        };
      };
    getData();
    return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;