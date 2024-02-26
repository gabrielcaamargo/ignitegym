import { VStack, Image, Text, Center, Heading } from 'native-base'

import BackgroundImage from '@assets/background.png'
import SvgLogo from '@assets/logo.svg'
import { Input } from '@/components/Input';

export function Signin() {
  return (
    <VStack flex={1} bg='gray.700' px={8}>
      <Image 
        source={BackgroundImage}
        alt='People working out'
        resizeMode='contain'
        position='absolute'
      />
    
      <Center my={24}>
        <SvgLogo />
        <Text color='gray.100' fontSize='sm'>Treine sua mente e seu corpo.</Text>
      </Center>
      
      <Center>
        <Heading color='gray.100' fontSize='xl' mb={6} fontFamily='heading'>
          Acesse sua conta
        </Heading>

        <Input 
          placeholder='Email'
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <Input 
          placeholder='Senha'
          secureTextEntry
        />
      </Center>
    </VStack>
  );
}