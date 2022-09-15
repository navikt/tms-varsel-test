import { Button, Select, Textarea, Heading, Panel } from '@navikt/ds-react';
import type { GetServerSidePropsResult, NextPageContext } from 'next';
import { getAccessToken } from '../auth/accessToken';
import { beskyttetSide } from '../auth/beskyttetSide';
import { Layout } from '../components/Layout/Layout';
import { Section } from '../components/Section/Section';
import { Beskjed } from '../types/types';
import { getBeskjeder } from "./api/beskjeder";

interface PageProps {
  beskjeder: Beskjed[];
}

const Index = ({ beskjeder }: PageProps) => {
  return (
    <Layout>
        <Section lightBlue>
          <div>
            <Heading level="2" size="medium" spacing>
              Beskjed
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
            Oppgave
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
            Innboks
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
    const beskjeder = await getBeskjeder(bearerToken);

    return {
      props: { beskjeder },
    };
  }
);

export default Index;
