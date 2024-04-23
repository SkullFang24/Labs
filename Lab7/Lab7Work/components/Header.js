import * as React from 'react';
import { View, Text } from 'react-native';

export default function Header() {
    return (
        <View style={{ flex: 0.2, backgroundColor: 'white' }}>
            <Text
                style={{ padding: 40, fontSize: 30, color: 'black' }}
                numberOfLines={3}>
                Welcome
                <Text style={{ fontWeight: 'bold' }}> to MyApp</Text>{' '}
            </Text>
        </View>
    );
}
    