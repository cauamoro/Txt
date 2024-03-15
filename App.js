import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextComponent, View } from 'react-native';
import TouchComponent from './assets/src / components/TouchComponent';
import { TextComponent } from 'react-native';

export default function App() {

  clickBn1 = () => {
    alert("BTN_1");
  };
  clickBn2 = () => {
    alert("BNT_2");
  };
  clickBn3 = () => {
    alert("BNT_3");
  };



  return (
    <View >
      <TouchComponent />
      <TextComponent />
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
