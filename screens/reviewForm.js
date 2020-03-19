import React from 'react';
import { StyleSheet, View, TextInput, Button, Keyboard } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';

const ReviewForm = () => {
  return (
    <View style={{ padding: 16 }}>
      <Formik
        initialValues={{ make: '', model: '', year: '', rating: '' }}
        onSubmit={values => {
          console.log(values);
          Keyboard.dismiss();
        }}
      >
        {formikProps => (
          <View>
            <TextInput
              placeholder='Make'
              style={globalStyles.inputType}
              value={formikProps.values.make}
              onChangeText={formikProps.handleChange('make')}
            />
            <TextInput
              placeholder='Model'
              style={globalStyles.inputType}
              value={formikProps.values.model}
              onChangeText={formikProps.handleChange('model')}
            />
            <TextInput
              placeholder='Year'
              style={globalStyles.inputType}
              value={formikProps.values.year}
              onChangeText={formikProps.handleChange('year')}
            />
            <TextInput
              placeholder='Rating (1-5)'
              style={globalStyles.inputType}
              value={formikProps.values.rating}
              keyboardType='numeric'
              onChangeText={formikProps.handleChange('rating')}
            />
            <Button
              title='Submit'
              color='#41b883'
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReviewForm;
