import React, { createContext, useState, useEffect } from "react";

export const APIContext = createContext();

const APIProvider = ({ children }) => {
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const dataFromAPI = await fetchData();
            setApiData(dataFromAPI);
            setLoading(false)
        }
        getData();
    }, [])

    const fetchData = async () => {
        const res = await fetch("https://randomuser.me/api/?results=100");
        const data = await res.json();
        return data;
    }

    return (
        <APIContext.Provider value={{ apiData, loading, fetchData }}>
            {children}
        </APIContext.Provider>
    )
}

export default APIProvider;