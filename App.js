import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from './components/routes/StackNavigator';
import { Reports } from './components/screens/Reports/Reports';
import StepScreen from './components/screens/createReports/StepScreen';
import CreateReports from './components/screens/createReports/CreateReports';
import { CaatingaArticle } from './components/screens/articles/CaatingaArticle/CaatingaArticle';
import { Logged } from './components/screens/Logged/Logged';
import { SudesteArticle } from './components/screens/articles/SudesteArticle/SudesteArticle';
import { SignIn } from './components/screens/SignIn/SignIn';

export default function App() {
  return (
    <NavigationContainer>
       <MyStack />
    </NavigationContainer>
  );
}