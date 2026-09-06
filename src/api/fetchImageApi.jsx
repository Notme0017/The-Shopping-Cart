import { useEffect, useState } from "react"

const useImageURL = () =>{
    const[imageURL, setImageURL] = useState(null);
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch("https://picsum.photos/v2/list")
        .then((response) => {
            if(response.status >= 400)
                throw new Error("server error");

            return response.json();
        })
        .then((response) => setImageURL(response[0].download_url))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);

    return { imageURL, error, loading};
};

export default useImageURL;