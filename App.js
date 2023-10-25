import { StyleSheet, Text, View } from 'react-native';
import { SignIn } from './components/screens/SignIn/SignIn'
import { Register } from './components/screens/Register/Register'


export default function App() {
  return (
    <View style={styles.container}>
      <Register/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
