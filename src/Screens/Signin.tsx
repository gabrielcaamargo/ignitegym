import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'

import BackgroundImage from '@assets/background.png'
import SvgLogo from '@assets/logo.svg'
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

export function Signin() {
  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }} 
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg='gray.900' px={8}>
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

          <Button title='Acessar'/>

          
        </Center>

        <Center mt={24}>
          <Text 
            color='gray.100' 
            fontSize='sm' 
            mb={3} 
            fontFamily='body'
          >
            Ainda não tem acesso?
          </Text>

          <Button 
            title='Criar conta' 
            variant='outline' 
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}