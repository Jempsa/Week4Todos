import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header'; 
import AddTask from './components/Add'; 
import TaskList from './components/TaskList'; 

export default function App() {
  const [name, setName] = useState(''); 
  const [tasks, setTasks] = useState([]); 

  // Funktio uuden Taskin lisäämiseen
  const addTask = async () => {
    if (name.trim().length > 0) {
      const newTasks = [...tasks, { id: Date.now().toString(), name: name, completed: false }];
      setTasks(newTasks);
      setName(''); 
      await saveTasksToStorage(newTasks); 
    }
  };

  // Funktion tehdyn taskin yliviivaamiseen
  const toggleTaskCompletion = async (id) => {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
    await saveTasksToStorage(newTasks);
  };

  // Tallentaa taskin AsyncStorageen
  const saveTasksToStorage = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.log(error);
    }
  };

  // Lataa taskin AsyncStoragesta
  const loadTasksFromStorage = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Ladataan tehtävä
  useEffect(() => {
    //AsyncStorage.clear()
    loadTasksFromStorage();
  }, []);

  return (
  <ScrollView> 
    <View style={styles.container}>
      <Header title="Todo List" />
      <AddTask name={name} setName={setName} addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} /> 
    </View>
  </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 30,
    
  },
});