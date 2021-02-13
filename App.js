import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  // useState returns an array of two objects 
  // the first one is the current state which is a string or integer
  // the second item is a function that is responsible for changing the current state

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandeler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  // console.log(typeof setCourseGoals);


  const addGoalHandler = () => {
    setCourseGoals(currentGoal => [...courseGoals, enteredGoal]);
  }
  return (
    <View style={styles.main}>
      <View style={styles.inline}>
        <TextInput
          placeholder="Add Goal"
          style={styles.textInput}
          onChangeText={goalInputHandeler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map((goal) => <View style={styles.task} key={goal} ><Text style={styles.textWhite}>{goal}</Text></View>)}
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    color: "black",
    marginTop: 300,
    marginHorizontal: 30
  },
  inline: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    borderRadius: 30, borderWidth: 0.2,
    padding: 10,
    width: "85%"
  },
  task: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: 'gray',
    padding: 10,
    width: '82%',
    borderRadius: 30
  },
  textWhite: {
    color: 'white',
  }

});
