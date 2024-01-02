import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

interface UserCardProps {
  name: string;
  id: string;
}

export const UserCardTemplate = (
  { name, id, isLoading }: UserCardProps,
) => (isLoading ? <ActivityIndicator /> : (
  <View>
    <Text>Name: {name}</Text>
    <Text>id: {id}</Text>
  </View>
));
