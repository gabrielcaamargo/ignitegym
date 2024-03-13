import { Heading, Text, HStack, VStack } from "native-base";

export function HomeHeader() {
  return (
    <HStack bg='gray.800' pt={16} pb={6} px={8} alignItems='center'>
      <VStack>
        <Text color='gray.100' fontSize='md'>
          Olá,
        </Text>

        <Heading color='gray.100' fontSize='md'>
          Gabriel
        </Heading>
      </VStack>
    </HStack>
  )
}