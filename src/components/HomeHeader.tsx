import { Heading, Text, HStack, VStack, Icon } from "native-base";
import { UserPhoto } from "./UserPhoto";

import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";

export function HomeHeader() {
  return (
    <HStack 
      bg='gray.800' 
      pt={16} 
      pb={6} 
      px={8} 
      alignItems='center'
    >
      <UserPhoto 
        source={{ uri: 'https://github.com/gabrielcaamargo.png' }}
        size={16}
        alt='Imagem do usuário'
        mr={4}
      />
      <VStack flex={1}>
        <Text color='gray.100' fontSize='md'>
          Olá,
        </Text>

        <Heading color='gray.100' fontSize='md'>
          Gabriel
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon 
          as={MaterialIcons}
          name='logout'
          color='gray.400'
          size={8}
        />
      </TouchableOpacity>
    </HStack>
  )
}