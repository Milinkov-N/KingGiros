import Image, { ImageProps } from 'next/image'
import CSS from 'csstype'

export interface ImgProps extends ImageProps {
  size: number | string
  style?: CSS.Properties
}

export default function Img({ className, src, alt, size, style, ...all }: ImgProps) {
  const imgStyles: CSS.Properties = {
    position: 'relative',
    width: typeof size === 'number' ? `${size}px` : size,
    height: 'auto',
    aspectRatio: '1 / 1',
    ...style
  }

  return (
    <div className={ className } style={ imgStyles }>
      <Image
        src={ src }
        alt={ alt }
        objectFit='contain'
        layout='fill'
        { ...all }
      />
    </div>
  )
}