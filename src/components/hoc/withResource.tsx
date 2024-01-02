import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import axios from "axios";

export const withResource = (Component, path) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        setIsLoading(true);
        const response = await axios.get(path);
        setData(response.data);
        setIsLoading(false);
      })();
    });

    if (isLoading) return <ActivityIndicator />;

    return <Component data={data} />;
  };
};
