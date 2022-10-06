import styles from './Section.module.css';

export interface SectionProps {
  lightBlue?: boolean;
  lightPink?: boolean;
  lightGray?: boolean;
  children: React.ReactNode;
}

export const Section = ({ lightBlue, lightPink, lightGray, children }: SectionProps) => {
  return (
    <section className={`${styles.section} ${lightBlue && styles.lightBlueBackground} ${lightPink && styles.lightPinkBackground} ${lightGray && styles.lightGrayBackground}`}>
      <div className={styles.container}>{children}</div>
    </section>
  )
};
