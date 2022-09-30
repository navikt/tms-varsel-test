import { Heading } from '@navikt/ds-react';
import { Layout } from '../components/Layout/Layout';
import { Section } from '../components/Section/Section';
import { BeskjedPanel } from "../components/Panel/BeskjedPanel/BeskjedPanel";
import { OppgavePanel } from "../components/Panel/OppgavePanel/OppgavePanel";
import { InnboksPanel } from "../components/Panel/InnboksPanel/InnboksPanel";

const Index = () => {
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

export default Index;
