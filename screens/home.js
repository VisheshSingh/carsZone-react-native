import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal
} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [carReviews, setCarReviews] = useState([
    { make: 'Toyota', model: 'Corolla', key: '1', rating: 5, year: 2017 },
    { make: 'Honda', model: 'Civic', key: '2', rating: 4, year: 2015 },
    { make: 'Nissan', model: 'Sentra', key: '3', rating: 3, year: 2012 }
  ]);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons
            name='close'
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />
          <View>
            <ReviewForm />
          </View>
        </View>
      </Modal>

      <MaterialIcons
        name='add'
        style={styles.modalToggle}
        size={24}
        onPress={() => setModalOpen(true)}
      />

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

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20
  },
  modalContent: {
    flex: 1
  }
});
