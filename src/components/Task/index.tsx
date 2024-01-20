import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

interface Props {
  id: any;
  title: string;
  onPressDone: (checked: boolean) => void;
  onRemove: () => void;
}

export default function Task({ id, title, onPressDone, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.task}>
        <BouncyCheckbox
          key={id}
          size={15}
          fillColor="#4EA8DE"
          unfillColor="#262626"
          text={title}
          textContainerStyle={{
            width: '90%'
          }}
          innerIconStyle={{
            borderWidth: 1,
          }}
          onPress={(isChecked: boolean) => onPressDone(isChecked)}
        />
        <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Feather name="trash" size={22} color="#808080" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
