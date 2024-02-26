import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Signin } from '@/screens/Signin'
import { Signup } from '@/screens/Signup'

type TAuthRoutes = {
  Signin: undefined
  Signup: undefined
}

export type TAuthNavigationRoutesProps = NativeStackNavigationProp<TAuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<TAuthRoutes>()

export function AuthRoutes() {
  <Navigator>
    <Screen 
      component={Signin} 
      name='Signin' 
    />
    <Screen 
      component={Signup} 
      name='Signup' 
    />
  </Navigator>
}