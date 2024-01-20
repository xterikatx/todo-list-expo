import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

interface Props {
  value: number | string;
}

export default function Badge({ value }: Props) {
  return (
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>{value}</Text>
    </View>
  );
}
