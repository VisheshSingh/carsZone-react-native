import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  Keyboard
} from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';
import * as yup from 'yup';
import FlatButton from '../shared/flatButton';

const reviewSchema = yup.object({
  make: yup
    .string()
    .required()
    .min(2),
  model: yup
    .string()
    .required()
    .min(2),
  year: yup
    .string()
    .required()
    .test('valid-year', 'Enter a valid year (1995-2020)', val => {
      return parseInt(val) > 1994 && parseInt(val) < 2025;
    }),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'Review rating must be between 1 - 5', val => {
      return parseInt(val) > 0 && parseInt(val) < 6;
    })
});

const ReviewForm = ({ addReview }) => {
  return (
    <View style={{ padding: 16 }}>
      <Formik
        initialValues={{ make: '', model: '', year: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          addReview(values);
          actions.resetForm();
        }}
      >
        {formikProps => (
          <View>
            <TextInput
              placeholder='Make'
              style={globalStyles.inputType}
              value={formikProps.values.make}
              onChangeText={formikProps.handleChange('make')}
              onBlur={formikProps.handleBlur('make')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.make && formikProps.errors.make}
            </Text>
            <TextInput
              placeholder='Model'
              style={globalStyles.inputType}
              value={formikProps.values.model}
              onChangeText={formikProps.handleChange('model')}
              onBlur={formikProps.handleBlur('model')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.model && formikProps.errors.model}
            </Text>
            <TextInput
              placeholder='Year'
              style={globalStyles.inputType}
              value={formikProps.values.year}
              keyboardType='numeric'
              onChangeText={formikProps.handleChange('year')}
              onBlur={formikProps.handleBlur('year')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.year && formikProps.errors.year}
            </Text>
            <TextInput
              placeholder='Rating (1-5)'
              style={globalStyles.inputType}
              value={formikProps.values.rating}
              keyboardType='numeric'
              onChangeText={formikProps.handleChange('rating')}
              onBlur={formikProps.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.rating && formikProps.errors.rating}
            </Text>
            <FlatButton text='submit' onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReviewForm;
