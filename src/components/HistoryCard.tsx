import { HStack, Heading, Text, VStack } from "native-base";

export function HistoryCard() {
  return (
    <HStack  
      w='full'
      px={6}
      py={4}
      mb={2}
      bg='gray.800'
      rounded='md'
      alignItems='center'
      justifyContent='center'
    >
      <VStack flex={1}>
        <Heading
          color='white'
          fontSize='sm'
          textTransform='capitalize'
        >
          Costas
        </Heading>
        <Text
        color='gray.100'
        fontSize='lg'
        numberOfLines={1}
        >
          Puxada frontal
        </Text>
      </VStack>

      <Text color='gray.300' fontSize='md'>
        08:56
      </Text>
    </HStack>
  )
}