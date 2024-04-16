import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyle';
export default function BookDetails({ navigation }) {
const pressHandler = () => {
navigation.goBack();
}
return (
<View style={globalStyles.container}>
<Text>Book Details Screen</Text>
<Button title='back to home screen' onPress={pressHandler} />
</View>
);
}