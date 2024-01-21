import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="add-task" size={100} color="#808080" />
      <Text style={[styles.text1, styles.text2]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text2}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
