import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { Home } from '@screens/Home'
import { Exercise } from '@screens/Exercise'
import { Profile } from '@screens/Profile'
import { History } from '@screens/History'

type AppRoutes = {
  Home: undefined
  Exercise: undefined
  Profile: undefined
  History: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name='Home'
        component={Home}
      />

      <Screen
        name='History'
        component={History}
      />

      <Screen
        name='Profile'
        component={Profile}
      />

      <Screen
        name='Exercise'
        component={Exercise}
      />
    </Navigator>
  )
}