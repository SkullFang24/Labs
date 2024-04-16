import { Text, SafeAreaView, StyleSheet } from 'react-native';
import {styles1} from './styles/globalStyles.js';

export default function App() {

return (
    <SafeAreaView style={styles1.containerGlobal}>
    <Text style={styles1.paragraphGlobal}>
        Change code in the editor and watch it change on your phone! Save to get
        a shareable url.
    </Text>
    </SafeAreaView>
);
}
