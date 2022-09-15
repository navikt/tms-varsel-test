import { Heading } from '@navikt/ds-react';
import type { GetServerSidePropsResult, NextPageContext } from 'next';
import { getAccessToken } from '../auth/accessToken';
import { beskyttetSide } from '../auth/beskyttetSide';
import { Layout } from '../components/Layout/Layout';
import { Section } from '../components/Section/Section';
import { Beskjed } from '../types/types';
import { getBeskjeder } from "./api/beskjeder";
import { BeskjedPanel } from "../components/Panel/BeskjedPanel/BeskjedPanel";
import { OppgavePanel } from "../components/Panel/OppgavePanel/OppgavePanel";
import { InnboksPanel } from "../components/Panel/InnboksPanel/InnboksPanel";

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
            <BeskjedPanel />
          </div>
        </Section>
      <Section lightPink>
        <div>
          <Heading level="2" size="medium" spacing>
            Oppgave
          </Heading>
          <OppgavePanel />
        </div>
      </Section>
      <Section lightGreen>
        <div>
          <Heading level="2" size="medium" spacing>
            Innboks
          </Heading>
          <InnboksPanel />
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
