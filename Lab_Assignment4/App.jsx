import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
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
}

const styles = StyleSheet.create({});
