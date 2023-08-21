import React, {ReactNode} from 'react'
import styles from './styles.module.scss'

interface SectionContainerProps {
  children: ReactNode
}

const SectionContainer: React.FC<SectionContainerProps> = ({children}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>{children}</div>
    </section>
  )
}

export default SectionContainer
