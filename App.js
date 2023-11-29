import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from './components/routes/StackNavigator';



export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}