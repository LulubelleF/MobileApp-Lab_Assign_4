import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleAdd = () => {
    addTask(taskText);
    setTaskText("");
  };

  return null;
}
