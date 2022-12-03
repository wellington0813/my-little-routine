import { NavegationContainer, StackActions } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from '../Pages/Start'

const Stack = createNativeStackNavigator();

export default function Allpages() {

  return (
    <NavegationContainer>
      <Stack.Navigator
        screenOptions={{ hgeaderShown: false }}
      >
        <Stack.Screen
          name='Start'
          component={Start}
        />

      </Stack.Navigator>
    </NavegationContainer>
  )
}