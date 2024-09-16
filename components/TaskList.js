import React from 'react';
import { FlatList, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTaskCompletion }) => {
  const renderTask = ({ item }) => (
    <TaskItem task={item} toggleTaskCompletion={toggleTaskCompletion} />
  );

  return (
<ScrollView>
    <FlatList
      data={tasks}
      renderItem={renderTask}
      keyExtractor={(item) => item.id}
    />
</ScrollView>
  );
};

const styles = StyleSheet.create({

  list: {
    marginBottom: 20,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default TaskList;