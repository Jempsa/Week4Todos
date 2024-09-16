import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const TaskItem = ({ task, toggleTaskCompletion }) => {
  return (
    <TouchableOpacity onPress={() => toggleTaskCompletion(task.id)}>
      <View style={styles.taskItem}>
        <Text style={task.completed ? styles.completedTask : styles.taskText}>
          {task.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 10,
    backgroundColor: '#9a89e8',
    borderBottomWidth: 5,
    borderBottomColor: '#eee',
  },
  taskText: {
    fontSize: 18,
  },
  completedTask: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
});

export default TaskItem;