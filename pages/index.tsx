import useSwr from "swr";
import { Heading } from '@navikt/ds-react';
import { Layout } from '../components/Layout/Layout';
import { Section } from '../components/Section/Section';
import { BeskjedPanel } from "../components/Panel/BeskjedPanel/BeskjedPanel";
import { OppgavePanel } from "../components/Panel/OppgavePanel/OppgavePanel";
import { InnboksPanel } from "../components/Panel/InnboksPanel/InnboksPanel";
import { redirectToIdPorten } from "../lib/api/redirect";
import { fetcher } from "../lib/api/fetcher";

const Index = () => {
  const { data: status } = useSwr("https://person.dev.nav.no/tms-event-test-producer/login/status", fetcher);
  const { data } = useSwr("https://person.dev.nav.no/tms-event-test-producer/test", fetcher);

  if (typeof window !== "undefined") {
    if (status && status.authenticated === false) {
      redirectToIdPorten("https://www.dev.nav.no/tms-varsel-test");
      return null;
    }
  }

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
