import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { styles } from './styles/styles';
export default function TouchComponent() {

    return (
        <View style={styles.Bnt1}>
            <TouchableOpacity style={styles.Bnt1} onPress={onPress}>
                <Text>Hello</Text>
            </TouchableOpacity>
        </View>
    );
}

////const styles = StyleSheet.create({
///container: {
///flex: 1,
/// backgroundColor: '#fff',
// alignItems: 'center',
// justifyContent: 'center',
// },
//});
