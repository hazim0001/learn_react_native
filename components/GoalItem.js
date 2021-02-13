import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
    return (
        <ScrollView>
        {courseGoals.map((goal) => <View style={styles.task} key={goal} ><Text style={styles.textWhite}>{goal}</Text></View>)}
      </ScrollView>
    );
};

export default GoalItem

const styles = StyleSheet.create()