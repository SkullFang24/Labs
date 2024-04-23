import * as React from 'react';
import { View, Text } from 'react-native';
export default function WelcomeScreen() {
    return (
        <View style={{ flex: 1 }}>
            <Text
                style={{
                    padding: 40,
                    fontSize: 20,
                    color: 'black',
                    textAlign: 'center',
                    fontWeight: 'bold'
        }}>
        The 346th day of the year (347th in leap years) in the Gregorian 
        calendar
            </Text>
            <Text
            style={{
                fontSize: 14,
                padding: 20,
                marginVertical: 8,
                color: 'black',
                textAlign: 'center',
                fontWeight: 'bold'
            }}>
            19 days remain until the end of the year 
            </Text>
        </View>
    );
}
