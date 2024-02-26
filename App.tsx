import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@/components/Loading';
import { Signin } from '@/Screens/Signin';

export default function App() {
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <NativeBaseProvider isSSR={false}>
      <StatusBar 
        barStyle='light-content' 
        translucent 
        backgroundColor='transparent'
      />
      {fontsLoaded ? <Signin /> : <Loading />}
    </NativeBaseProvider>
  );
}
