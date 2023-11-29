import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from './components/routes/StackNavigator';

import { Reports } from './components/screens/Reports/Reports';

export default function App() {
  return (
    <NavigationContainer>
      {/* <MyStack /> */}
      <Reports />
    </NavigationContainer>
  );
}