import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
