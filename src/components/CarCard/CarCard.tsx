import { useEffect, useState } from "react";
import { CarCardTemplate } from "./CarCardTemplate";
import axios from "axios"

export const CarCard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await axios.get("/user/123");
            setData(response.data);
            setIsLoading(false);
        })();
    });

    return (
        <CarCardTemplate
            model={data?.model}
            brand={data?.brand}
            seats={data?.seats}
            id={data?.id}
            isLoading={isLoading}
        />
    );
};
