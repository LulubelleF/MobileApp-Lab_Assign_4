import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleAdd = () => {
    addTask(taskText);
    setTaskText("");
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#aaa",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
});
