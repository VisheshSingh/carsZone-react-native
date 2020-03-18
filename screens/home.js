import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function home({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate('ReviewDetails');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Home screen</Text>
      <Button title='Go to Review Details' onPress={onPressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({});
