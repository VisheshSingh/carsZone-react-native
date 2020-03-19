import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function reviewDetails({ navigation }) {
  const rating = navigation.getParam('rating');
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.title}>
          {navigation.getParam('make')} {navigation.getParam('model')}
        </Text>
        <View style={styles.rating}>
          <Text>CarsZone Rating: {images.ratings[rating]}</Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd'
  }
});
