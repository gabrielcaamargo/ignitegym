import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'

import BackgroundImage from '@assets/background.png'
import SvgLogo from '@assets/logo.svg'
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

export function Signup() {
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
            Crie sua conta
          </Heading>

          <Input 
            placeholder='Nome'
          />

          <Input 
            placeholder='Email'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          
          <Input 
            placeholder='Senha'
            secureTextEntry
          />

          <Button title='Criar e acessar'/>
        </Center>

          <Button 
            title='Voltar para o login'
            mt={24}
            variant='outline'
          />
      </VStack>
    </ScrollView>
  );
}