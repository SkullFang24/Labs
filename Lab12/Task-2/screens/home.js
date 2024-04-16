import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyle';
export default function Home({ navigation }) {
const pressHandler = () => {
//navigation.navigate('ReviewDetails');
navigation.push('BookDetails');
}
return (
<View style={globalStyles.container}>
<Text style={globalStyles.titleText}>Home Screen</Text>
<Button title='to book details screen' onPress={pressHandler} />
</View>
);
}
