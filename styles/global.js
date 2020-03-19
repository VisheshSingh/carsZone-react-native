import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  title: {
    fontFamily: 'Baloo-bold',
    fontSize: 18,
    color: '#333'
  },
  para: {
    marginVertical: 8,
    lineHeight: 20
  }
});

export const images = {
  ratings: {
    '1': '🚙',
    '2': '🚙🚙',
    '3': '🚙🚙🚙',
    '4': '🚙🚙🚙🚙',
    '5': '🚙🚙🚙🚙🚙'
  }
};
