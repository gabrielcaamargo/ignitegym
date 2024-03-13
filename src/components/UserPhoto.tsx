import { Image, IImageProps } from "native-base";

interface IUserPhotoProps extends IImageProps {
  size: number
}

export function UserPhoto({ size, ...rest }: IUserPhotoProps) {
  return (
    <Image 
      h={size}
      w={size}
      rounded='full'
      borderWidth={2}
      borderColor='gray.600'
      {...rest}
    />
  )
}