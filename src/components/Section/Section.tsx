import styles from './Section.module.css';

export interface SectionProps {
  lightBlue?: boolean;
  lightPink?: boolean;
  lightGray?: boolean;
  lightGreen?: boolean;
  children: React.ReactNode;
}

export const Section = ({ lightBlue, lightPink, lightGray, lightGreen, children }: SectionProps) => {
  return (
    <section className={`${styles.section} ${lightBlue && styles.lightBlueBackground} ${lightPink && styles.lightPinkBackground} ${lightGray && styles.lightGrayBackground} ${lightGreen && styles.lightGreenBackground}`}>
      <div className={styles.container}>{children}</div>
    </section>
  )
};
