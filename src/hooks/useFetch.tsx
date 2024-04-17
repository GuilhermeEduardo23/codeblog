import { useState, useEffect } from "react";
import axios from "axios";

interface IData {
    id: string,
    date: string,
    title: string,
    text: string,
}

export const useFetch = (url: string) => {
    const [data, setData] = useState<Array<IData> | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const searchArticles = async () => {
            setLoading(true);

            const response = (await axios.get(url)).data

            try {
                setData(response);
            } catch (err) {
                setError(true);
            }

            setLoading(false);
        }

        searchArticles();
    }, [url]);

    return {data, loading, error};
}