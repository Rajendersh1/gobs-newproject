import { StatusBar } from 'expo-status-bar';
import Settings from '../gobs/screens/Settings';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Home from './screens/Home';
import Login from './screens/Login';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      
      <SafeAreaProvider>
        {/* <Navigation colorScheme={colorScheme} />
        <StatusBar /> */}
      <Login/>
      </SafeAreaProvider>
      
    );
  }
}
