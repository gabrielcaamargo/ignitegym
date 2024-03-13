import { Text, Pressable, IPressableProps } from "native-base";

interface IGroupProps extends IPressableProps {
  name: string
  isActive?: boolean
}

export function Group({ name, isActive = false, ...rest }: IGroupProps) {
  return (
    <Pressable 
      mr={4}
      w={24}
      h={8}
      bg='gray.700'
      rounded='md'
      justifyContent='center'
      alignItems='center'
      overflow='hidden'
      isPressed={isActive}
      _pressed={{
        borderColor: 'green.500',
        borderWidth: 1
      }}
      {...rest}
    >
      <Text
        color={isActive ? 'green.500' : 'gray.400'}
        textTransform='uppercase'
        fontSize='xs'
        fontWeight='bold'
      >
        {name}
      </Text>
    </Pressable>
  );
}