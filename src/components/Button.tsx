import { Button as NativeBaseButton, IButtonProps as IButtonNativeBaseProps, Text } from "native-base"

interface IButtonProps extends IButtonNativeBaseProps {
  title: string
  variant?: 'outline' | 'solid'
}

export function Button({ title, variant = 'solid', ...rest }: IButtonProps) {
  return (
    <NativeBaseButton
      w='full'
      h={54}
      bg={variant === 'outline' ? 'transparent' : 'green.500'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor='green.500'
      _pressed={{
        bg: variant == 'outline' ? 'gray.800' : 'green.600' 
      }}
      {...rest}
    >
      <Text 
        color={variant == 'outline' ? 'green.500' : 'white' }
        fontFamily='heading' 
        fontSize='md'
        rounded='sm'
      >
        {title}
      </Text>
    </NativeBaseButton>
  )
}