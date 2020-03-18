import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = props => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    backgroundColor: '#fff',
    marginVertical: 6,
    marginHorizontal: 4,
    elevation: 3
  },
  cardContent: {
    marginVertical: 18,
    marginHorizontal: 12
  }
});

export default Card;
