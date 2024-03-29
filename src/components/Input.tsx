import { IInputProps, Input as NativeBaseInput } from 'native-base'

export function Input({ placeholder, ...rest }: IInputProps) {
  return (
    <NativeBaseInput 
      bg='gray.900'
      h={54}
      px={4}
      borderWidth={0}
      fontSize='md'
      color='white'
      fontFamily='body'
      mb={4}
      placeholder={placeholder}
      placeholderTextColor='gray.300'
      _focus={{
        bg: 'gray.900',
        borderWidth: 1,
        borderColor: 'green.500'
      }}
      {...rest}
    />
  )
}