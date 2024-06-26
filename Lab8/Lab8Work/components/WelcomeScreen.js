import * as React from 'react';
import { View, Text,ScrollView, StyleSheet,FlatList } from 'react-native';
const countriesToDisplay = [
    { name: 'United States', code: 'US' },
    { name: 'Canada', code: 'CA' },
    { name: 'United Kingdom', code: 'UK' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'Italy', code: 'IT' },
    { name: 'Spain', code: 'ES' },
    { name: 'Australia', code: 'AU' },
    { name: 'Japan', code: 'JP' },
    { name: 'China', code: 'CN' },
    { name: 'India', code: 'IN' },
    { name: 'Brazil', code: 'BR' },
    { name: 'Mexico', code: 'MX' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'Russia', code: 'RU' },
    { name: 'South Korea', code: 'KR' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Egypt', code: 'EG' },
];
const Country = ({ name, code }) => (
    <View style={styles.innerContainer}>
        <Text style={styles.itemText}>{name}</Text>
        <Text style={styles.itemText}>{code}</Text>
    </View>
);
    const WelcomeScreen = () => {
        const renderItem = ({ item }) => <Country name={item.name} code={item.code}
/>;
        return (
    <View style={styles.container}>
        <FlatList
            data={countriesToDisplay}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}></FlatList>
    </View>
    );
};
const styles = StyleSheet.create({
container: {
    flex: 1,
}, 
innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
},
headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
},
regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
},
});
export default WelcomeScreen;