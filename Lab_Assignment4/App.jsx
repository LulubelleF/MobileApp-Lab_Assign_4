import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, Button } from "react-native";
import ToDoForm from "./component/ToDoForm";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const addTask = (taskText) => {
    if (taskText.trim() === "") {
      setError("Task cannot be empty.");
      return;
    }

    if (tasks.includes(taskText)) {
      setError("Task already exists.");
      return;
    }

    setTasks([...tasks, taskText]);
    setError("");
  };

  const clearTasks = () => {
    setTasks([]);
    setError("");
  };

  return (
    <View style={styles.container}>
      <ToDoForm addTask={addTask} />
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Button title="Clear All Tasks" onPress={clearTasks} color="#d9534f" />

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  task: {
    padding: 10,
    fontSize: 18,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginTop: 5,
    borderRadius: 5,
  },
  error: {
    color: "red",
    marginBottom: 10,
    fontSize: 16,
  },
});
