import React, {ReactNode} from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

interface ContentProps {
  title: string
  text?: string
  children: ReactNode
  imagePath: any
  imageAlt: string
  imageWidth: number
  imageHeight: number
  priority?: true | false
}

const HeroContent: React.FC<ContentProps> = ({
  title,
  text,
  children,
  imagePath,
  imageAlt,
  imageWidth,
  imageHeight,
  priority,
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.content__wrap}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
        <div>{children}</div>
      </div>
      <div className={styles.image__wrap}>
        <Image
          src={imagePath}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          priority={priority}
        />
      </div>
    </div>
  )
}

export default HeroContent
