import { Text, View, ActivityIndicator } from "react-native";
import { withResource } from "../hoc/withResource";

interface UserCardProps {
  data?: {
    name: string;
    id: string;
  };
}

const UserCard = ({ data }: UserCardProps) => {
    <View>
      <Text>Name: {data.name}</Text>
      <Text>id: {data.id}</Text>
    </View>
  );
};

export default withResource(UserCard, "/user/123");
