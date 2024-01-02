import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

interface CarCardProps {
    model: string;
    brand: string;
    seats: number;
    id: string;
    isLoading: boolean;
}

export const CarCardTemplate = (
    { model, brand, seats, id, isLoading }: CarCardProps,
) => (isLoading ? <ActivityIndicator /> : (
    <View>
        <Text>Model: {model}</Text>
        <Text>Brand: {brand}</Text>
        <Text>Seats: {seats}</Text>
        <Text>Name: {id}</Text>
    </View>
));
