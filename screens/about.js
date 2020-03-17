import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function about() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>About screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
