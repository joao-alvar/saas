import React, {ReactNode} from 'react'
import styles from './styles.module.scss'

interface SectionProps {
  children: ReactNode
}

const HeroContainer: React.FC<SectionProps> = ({children}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>{children}</div>
    </section>
  )
}

export default HeroContainer
