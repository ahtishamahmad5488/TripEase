// // App.js
// import React from 'react';
// import MainNavigator from './src/routes/MainNavigator';
// import {AuthProvider} from './src/context/AuthContext';
// import {NavigationContainer} from '@react-navigation/native';


// export default function App() {
//   return (
//     <AuthProvider>
//       <NavigationContainer>
//         <MainNavigator />
//       </NavigationContainer>
//     </AuthProvider>
//   );
// }
import React from 'react';
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
