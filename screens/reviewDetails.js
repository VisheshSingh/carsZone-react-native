import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function reviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>
        {navigation.getParam('make')} {navigation.getParam('model')}
      </Text>
      <Text>{navigation.getParam('rating')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
