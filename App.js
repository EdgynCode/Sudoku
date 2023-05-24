import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import PlayScreen from './components/PlayScreen';
import StatScreen from './components/StatScreen';
import SettingScreen from './components/SettingScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PlayScreen" headerMode="none">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        {/* <Stack.Screen name="PlayScreen" component={PlayScreen} /> */}
        {/* <Stack.Screen name="StatScreen" component={StatScreen} /> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
