import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles/styles';
export default function TextComponent() {

    return (
        <View >
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text>Hello</Text>
            </TouchableOpacity>
        </View>
    );
}