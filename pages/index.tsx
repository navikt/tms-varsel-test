import { Button, Select, Textarea, Heading, Panel } from '@navikt/ds-react';
import type { GetServerSidePropsResult, NextPageContext } from 'next';
import { getAccessToken } from '../auth/accessToken';
import { beskyttetSide } from '../auth/beskyttetSide';
import { Layout } from '../components/Layout/Layout';
import { Section } from '../components/Section/Section';
import { useFeatureToggleIntl } from '../hooks/useFeatureToggleIntl';
import { Søknad } from '../types/types';
import { getSøknader } from './api/soknader';
import {getBeskjeder} from "./api/beskjeder";

interface PageProps {
  beskjeder: Søknad[];
  søknader: Søknad[];
}

const Index = ({ beskjeder }: PageProps) => {
  const { formatMessage } = useFeatureToggleIntl();

  return (
    <Layout>
        <Section lightBlue>
          <div>
            <Heading level="2" size="medium" spacing>
              {formatMessage('sisteSøknad.heading')}
            </Heading>
            <Panel>
              <div style={{padding: "16px"}}>
                <Textarea
                  label="Tekst"
                  value="Skriv inn tekst"
                  onChange={() => null}
                  size="small"
                />
              </div>
              <div style={{padding: "16px"}}>
                <Textarea
                  label="Lenke"
                  value="Skriv inn lenke"
                  onChange={() => null}
                  size="small"
                />
              </div>
              <div style={{padding: "16px"}}>
                <Select
                  label="Ekstern varsling"
                  size="medium"
                >
                  <option value="false">False</option>
                  <option value="true">True</option>
                </Select>
              </div>
              <div style={{padding: "16px"}}>
                <Button variant="secondary">Opprett</Button>
              </div>
            </Panel>
          </div>
        </Section>
      <Section lightPink>
        <div>
          <Heading level="2" size="medium" spacing>
            {formatMessage('oppgaveTittel')}
          </Heading>
          <Panel>
            <div style={{padding: "16px"}}>
              <Textarea
                label="Tekst"
                value="Skriv inn tekst"
                onChange={() => null}
                size="small"
              />
            </div>
            <div style={{padding: "16px"}}>
              <Textarea
                label="Lenke"
                value="Skriv inn lenke"
                onChange={() => null}
                size="small"
              />
            </div>
            <div style={{padding: "16px"}}>
              <Select
                label="Ekstern varsling"
                size="medium"
              >
                <option value="false">False</option>
                <option value="true">True</option>
              </Select>
            </div>
            <div style={{padding: "16px"}}>
              <Button variant="secondary">Opprett</Button>
            </div>
          </Panel>
        </div>
      </Section>
      <Section lightGreen>
        <div>
          <Heading level="2" size="medium" spacing>
            {formatMessage('innboksTittel')}
          </Heading>
          <Panel>
            <div style={{padding: "16px"}}>
              <Textarea
                label="Tekst"
                value="Skriv inn tekst"
                onChange={() => null}
                size="small"
              />
            </div>
            <div style={{padding: "16px"}}>
              <Textarea
                label="Lenke"
                value="Skriv inn lenke"
                onChange={() => null}
                size="small"
              />
            </div>
            <div style={{padding: "16px"}}>
              <Select
                label="Ekstern varsling"
                size="medium"
              >
                <option value="false">False</option>
                <option value="true">True</option>
              </Select>
            </div>
            <div style={{padding: "16px"}}>
              <Button variant="secondary">Opprett</Button>
            </div>
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
    const beskjeder = await getBeskjeder(bearerToken);

    return {
      props: { beskjeder },
    };
  }
);

export default Index;
