import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function reviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.title}>
          {navigation.getParam('make')} {navigation.getParam('model')}
        </Text>
        <Text>{navigation.getParam('rating')}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({});
