import { ReactNode } from "react";
import { View } from "react-native";
import { createStyles } from "./styles";

interface RootProps {
  children: ReactNode
}

export const Root = ({children}: RootProps) => {
  const styles = createStyles();
  return (
  <View style={styles.root}>{children}</View>
)};