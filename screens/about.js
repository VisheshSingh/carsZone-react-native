import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function about() {
  return (
    <View style={styles.item}>
      <Text>About screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 24
  }
});
