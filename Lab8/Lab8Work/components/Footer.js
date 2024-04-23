import * as React from 'react';
import { View, Text } from 'react-native';
export default function Footer() {
    return (
        <View
            style={{
                backgroundColor: 'grey',
                marginBottom: 10,
        }}>
        <Text
            style={{
                fontSize: 18,
                color: 'black',
                textAlign: 'center',
        }}>
        All rights reserved 
        </Text>
    </View>
    );
}