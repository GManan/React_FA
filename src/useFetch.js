import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [cleanup, setCleanup] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);

                if (!res.ok) {
                    console.error("my response ", res);
                    throw Error('could not fetch the data for that resource');
                }

                const jsonData = await res.json();

                if (!cleanup) {
                    setData(jsonData);
                    setIsPending(false);
                    setError(null);
                    console.log(jsonData);
                }
            } catch (err) {
                if (!cleanup) {
                    if (err.name === 'AbortError') {
                        console.log("error Fetch ABORT");
                    } else {
                        console.error("error ", err);
                        setIsPending(false);
                        setError(err.message);
                    }
                }
            }
        };

        const timeoutId = setTimeout(() => fetchData(), 1000);

        return () => {
            setCleanup(true);
            clearTimeout(timeoutId);
        };
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;
