import { Heading } from '@navikt/ds-react';
import Varselbjelle from "./Varselbjelle";
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.appHeader}>
      <div className={styles.container}>
        <Heading level="1" size="xlarge">
          Test av varsler
        </Heading>
        <div>
          <Varselbjelle />
        </div>
      </div>
    </header>
  );
};
