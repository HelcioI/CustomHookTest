import { Text, View, ActivityIndicator } from "react-native";
import { withResource } from "../hoc/withResource";

interface CarCardProps {
  data?: {
    model: string;
    brand: string;
    seats: number;
    id: string;
  };
}

const CarCard = ({ data }: CarCardProps) => {
  return (
    <View>
      <Text>Model: {data.model}</Text>
      <Text>Brand: {data.brand}</Text>
      <Text>Seats: {data.seats}</Text>
      <Text>Name: {data.id}</Text>
    </View>
  );
};

export default withResource(CarCard, "/car/123");
