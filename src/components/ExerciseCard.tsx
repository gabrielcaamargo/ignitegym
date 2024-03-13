import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, Heading, Image, Text, VStack, Icon } from "native-base";
import { Entypo } from '@expo/vector-icons';

interface IExerciseCardProps extends TouchableOpacityProps {}

export function ExerciseCard({ ...rest }: IExerciseCardProps) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg='gray.700' py={1} px={4} rounded='md' mb={4} alignItems='center'>
        <Image
          source={{ uri: 'https://thumb.mais.uol.com.br/16669847-large.jpg?ver=0' }}
          alt='Imagem do exercício'
          h={16}
          w={16}
          rounded='md'
          mr={4}
          resizeMode='center'
        />

        <VStack flex={1}>
          <Heading fontSize='lg' color='white'>Serrote</Heading>
          <Text 
            fontSize='sm' 
            color='gray.400' 
            numberOfLines={2}
          >
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon 
          as={Entypo}
          name='chevron-thin-right'
          color='gray.400'
        />
      </HStack>
    </TouchableOpacity>
  )
}