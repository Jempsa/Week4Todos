import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Add({ name, setName, addTask }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={name}
        onChangeText={(text) => setName(text)}
      />
       <TouchableOpacity onPress={addTask}>
        <Text style={styles.saveButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    justifyContent: 'space-between',
  },

  input: {
    borderWidth: 3,
    borderColor: '#09070a',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },

  saveButton: {
    color: '#09070a', 
    fontSize: 18,
    marginBottom: 20,
  },

});