import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function home() {
  return (
    <View style={styles.item}>
      <Text>Review Details screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 24
  }
});
