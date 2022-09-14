import { Alert, BodyShort, Button, Heading, Link, Panel } from '@navikt/ds-react';
import type { GetServerSidePropsResult, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { getAccessToken } from '../auth/accessToken';
import { beskyttetSide } from '../auth/beskyttetSide';
import { Layout } from '../components/Layout/Layout';
import { Section } from '../components/Section/Section';
import { useFeatureToggleIntl } from '../hooks/useFeatureToggleIntl';
import { Dokument, MellomlagretSøknad, Søknad } from '../types/types';
import { formatFullDate } from '../utils/date';
import { getDocuments } from './api/dokumentoversikt';
import { getMellomlagredeSøknader } from './api/mellomlagredeSoknader';
import { getSøknader } from './api/soknader';

interface PageProps {
  søknader: Søknad[];
  dokumenter: Dokument[];
  mellomlagredeSøknader: MellomlagretSøknad[];
}

const Index = ({ søknader, dokumenter, mellomlagredeSøknader }: PageProps) => {
  const { formatMessage } = useFeatureToggleIntl();

  const router = useRouter();

  const sisteSøknad = useMemo(() => {
    return søknader[0];
  }, [søknader]);

  const sisteMellomlagredeSøknad = useMemo(() => {
    return mellomlagredeSøknader[0];
  }, [mellomlagredeSøknader]);

  return (
    <Layout>
      {sisteSøknad && (
        <Section lightBlue>
          <div>
            <Heading level="2" size="medium" spacing>
              {formatMessage('sisteSøknad.heading')}
            </Heading>
            <Panel border>
              <Heading level="3" size="small">
                {formatMessage('sisteSøknad.søknad.heading')}
              </Heading>
              <BodyShort spacing>
                {formatMessage('sisteSøknad.søknad.mottatt', {
                  date: formatFullDate(sisteSøknad.timestamp),
                })}
              </BodyShort>
              <BodyShort spacing>
                <Link href="#">{formatMessage('sisteSøknad.søknad.saksbehandlingstid')}</Link>
              </BodyShort>
            </Panel>
          </div>
        </Section>
      )}
      <Section lightPink>
        <div>
          <Heading level="2" size="medium" spacing>
            {formatMessage('oppgaveTittel')}
          </Heading>
          <Panel border>
            <Heading level="3" size="small">
              {formatMessage('sisteSøknad.søknad.heading')}
            </Heading>
            <BodyShort spacing>
              {formatMessage('sisteSøknad.søknad.mottatt', {
                date: formatFullDate(sisteSøknad.timestamp),
              })}
            </BodyShort>
            <BodyShort spacing>
              <Link href="#">{formatMessage('sisteSøknad.søknad.saksbehandlingstid')}</Link>
            </BodyShort>
          </Panel>
        </div>
      </Section>
      <Section lightGreen>
        <div>
          <Heading level="2" size="medium" spacing>
            {formatMessage('innboksTittel')}
          </Heading>
          <Panel border>
            <Heading level="3" size="small">
              {formatMessage('sisteSøknad.søknad.heading')}
            </Heading>
            <BodyShort spacing>
              {formatMessage('sisteSøknad.søknad.mottatt', {
                date: formatFullDate(sisteSøknad.timestamp),
              })}
            </BodyShort>
            <BodyShort spacing>
              <Link href="#">{formatMessage('sisteSøknad.søknad.saksbehandlingstid')}</Link>
            </BodyShort>
          </Panel>
        </div>
      </Section>
    </Layout>
  );
};

export const getServerSideProps = beskyttetSide(
  async (ctx: NextPageContext): Promise<GetServerSidePropsResult<{}>> => {

    const bearerToken = getAccessToken(ctx);
    const søknader = await getSøknader(bearerToken);
    const dokumenter = await getDocuments();
    const mellomlagredeSøknader = await getMellomlagredeSøknader();

    return {
      props: { søknader, dokumenter, mellomlagredeSøknader },
    };
  }
);

export default Index;
