import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const flatButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 10,
    backgroundColor: '#41b883'
  },
  buttonText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default flatButton;
