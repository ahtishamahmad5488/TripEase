import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/routes/Root/RootNavigator'; // we’ll create this later
import { AuthProvider } from './src/context/AuthContext';


const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
