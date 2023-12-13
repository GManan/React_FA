
import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect((e) => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        console.error("my repsonse ", res);
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                    console.log(data);
                })
                .catch((err) => {
                    console.log("error ", err);
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);
        console.log("use effect run");
    }, [url]);// empty array will make sure the useEffekt hook is running only once, on  the first render
    return { data: data, isPending: isPending, error: error }
}
export default useFetch;