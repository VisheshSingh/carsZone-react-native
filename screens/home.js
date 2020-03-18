import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function home({ navigation }) {
  const [carReviews, setCarReviews] = useState([
    { make: 'Toyota', model: 'Corolla', key: '1', rating: 5 },
    { make: 'Honda', model: 'Civic', key: '2', rating: 4 },
    { make: 'Nissan', model: 'Sentra', key: '3', rating: 3 }
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        keyExtractor={item => item.key}
        data={carReviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Card>
              <Text style={globalStyles.title}>
                {item.make} - {item.model}
              </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
