import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';
export default function App() {
const [students,setStudents]=useState([
{name:'Abid, Arslan',id:'1'},
{name:'Asad, Momina Binte',id:'2'},
{name:'Asad, Muhammad M.',id:'3'},
{name:'Fatima, Dua',id:'4'},
{name:'Farrukh, Annas A.',id:'5'},
{name:'Gill, Sahul S.',id:'6'},
{name:'Qaderi, Muhammad Faizan A.',id:'7'},
{name:'Rabbi, Sarim',id:'8'},
{name:'Tir Raazia, Eisha',id:'9'},
{name:'Mujahid, Hajra',id:'10'},
]);
const pressHandler = (id) => {
console.log(id);
setStudents((listStudents) => {
return listStudents.filter(students => students.id != id);
});
};
return (
<View style={styles.container}>
<FlatList
numColumns={2}
keyExtractor={(item)=>item.id}
data={students}
renderItem={({item}) => (
<TouchableOpacity onPress={() => pressHandler(item.id)}>
<Text style={styles.item}>
{item.name}
</Text>
</TouchableOpacity>
)
}
/>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'pink',
alignItems: 'center',
justifyContent: 'center',
},
item: {
marginTop:40,
padding:15,
backgroundColor:'green',
fontSize:12,
marginHorizontal:10, 
},
});