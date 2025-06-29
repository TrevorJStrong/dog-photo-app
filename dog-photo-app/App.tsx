import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import BottomTab from './src/navigation/BottomNav';
import "./global.css"

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTab />
        <Toast />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};