import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function home() {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 24
  },
  title: {
    fontFamily: 'Baloo-bold',
    fontSize: 18
  }
});
