import { Heading } from '@navikt/ds-react';
import { useFeatureToggleIntl } from '../../hooks/useFeatureToggleIntl';
import Varselbjelle from "./Varselbjelle";
import styles from './AppHeader.module.css';

export const AppHeader = () => {
  const intl = useFeatureToggleIntl();

  return (
    <header className={styles.appHeader}>
      <div className={styles.container}>
        <Heading level="1" size="xlarge">
          {intl.formatMessage('appTittel')}
        </Heading>
        <div>
          <Varselbjelle />
        </div>
      </div>
    </header>
  );
};
