import styles from './Section.module.css';

export interface SectionProps {
  lightBlue?: boolean;
  lightPink?: boolean;
  lightGreen?: boolean;
  children: React.ReactNode;
}

export const Section = ({ lightBlue, lightPink, lightGreen, children }: SectionProps) => {
  return (
    <section className={`${styles.section} ${lightBlue && styles.lightBlueBackground} ${lightPink && styles.lightPinkBackground} ${lightGreen && styles.lightGreenBackground}`}>
      <div className={styles.container}>{children}</div>
    </section>
  )
};
