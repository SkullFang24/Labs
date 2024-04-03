import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import Course from './components/Course';
export default function App() {
const [courses, setCourses] = useState([
{ name: 'programmingI', key: '1' },
{ name: 'mobileAppDevelopment', key: '2' },
{ name: 'natural language[processing', key: '3' }
]);
const pressHandler = (key) => {
setCourses(prevCourses => {
return prevCourses.filter(courses => courses.key != key);
});
};
return (
<View style={styles.container}>
<Header />
<View style={styles.content}>
{/* add courses */}
<View style={styles.list}>
<FlatList
data={courses}
renderItem={({ item }) => (
<Course item={item} pressHandler={pressHandler} />
)}
/>
</View>
</View>
</View>
);
}
