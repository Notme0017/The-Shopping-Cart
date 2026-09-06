import { useState, useEffect } from "react";
import { data } from "react-router";

const useAPI = () =>{
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch(`https://fakestoreapi.com/products`)
            .then((response) =>{
                if(response.status >= 400) throw new Error("server error");
                const data = response.json();
                return data;
            })
            .then((data) =>{
                setProducts(data);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);
    console.log("Fetch API is called.")
    return {items: products, error, loading};
}

export default useAPI;