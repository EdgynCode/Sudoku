import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, PlayScreen, StatScreen, SettingScreen } from "./screens";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" headerMode="none">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="PlayScreen" component={PlayScreen} />
        {/* <Stack.Screen name="StatScreen" component={StatScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
