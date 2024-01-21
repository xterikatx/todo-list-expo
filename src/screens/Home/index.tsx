import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import Badge from "../../components/Badge";
import Task from "../../components/Task";
import EmptyState from "../../components/Empty";

type TasksProps = {
  id: string;
  title: string;
  done: boolean;
};

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  function generateUniqueId() {
    return `${Date.now().toString(36)}${Math.random()
      .toString(36)
      .replace("0.", "")
      .slice(2)}`;
  }

  const handleAddTask = () => {
    const newData = {
      id: generateUniqueId(),
      title: task,
      done: false,
    };

    setTasks((prevState) => [...prevState, newData]);
    setTask("");
  };

  const handleRemoveTask = (taskId: string) => {
    Alert.alert("Atenção", "Deseja realmente excluir essa tarefa?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          setTasks((prevState) =>
            prevState.filter((task) => task.id !== taskId)
          );
        },
      },
    ]);
  };

  const handleToggleTaskDone = (taskId: string, isChecked: boolean) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === taskId ? { ...task, done: isChecked } : task
      )
    );
  };

  const getCompletedTasksCount = () => {
    return tasks.filter((task) => task.done).length;
  };

  return (
    <>
      {/* Background Logo */}
      <View style={styles.backgroundLogo}>
        <Image
          resizeMode="center"
          source={require("../../assets/images/logo.png")}
        />
      </View>

      {/* Content */}
      <View style={styles.container}>
        {/* Form */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#6b6b6b"}
            onChangeText={setTask}
            value={task}
          />
          <TouchableOpacity
            disabled={!task.length}
            style={styles.button}
            onPress={handleAddTask}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Count Container */}
        <View style={styles.countContainer}>
          <View style={styles.row}>
            <Text style={styles.textNotCompleted}>Criadas</Text>
            <Badge value={tasks.length} />
          </View>

          <View style={styles.row}>
            <Text style={styles.textCompleted}>Concluídas</Text>
            <Badge value={getCompletedTasksCount()} />
          </View>
        </View>
        {/* Results */}
        <View>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <Task
                id={item.id}
                title={item.title}
                onPressDone={(checked) =>
                  handleToggleTaskDone(item.id, checked)
                }
                onRemove={() => handleRemoveTask(item.id)}
              />
            )}
            ListEmptyComponent={() => <EmptyState />}
          />
        </View>
      </View>
    </>
  );
}
