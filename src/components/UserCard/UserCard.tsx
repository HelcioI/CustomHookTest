import { useEffect, useState } from "react";
import axios from "axios";
import { UserCardTemplate } from "./UserCardTemplate";

export const UserCard = () => {
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
    <UserCardTemplate
      name={data.name}
      id={data.id}
      isLoading={isLoading}
    />
  );
};
