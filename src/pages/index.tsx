import useSwr from "swr";
import { Heading } from '@navikt/ds-react';
import { Layout } from '../components/Layout/Layout';
import { Section } from '../components/Section/Section';
import { BeskjedPanel } from "../components/Panel/BeskjedPanel/BeskjedPanel";
import { OppgavePanel } from "../components/Panel/OppgavePanel/OppgavePanel";
import { InnboksPanel } from "../components/Panel/InnboksPanel/InnboksPanel";
import { redirectToIdPorten } from "../lib/api/redirect";
import { fetcher } from "../lib/api/fetcher";
import { statusUrl }  from "../lib/urls";
import { isBrowser } from "../lib/utils/environments";
import {UtkastPanel} from "../components/Panel/UtkastPanel/UtkastPanel";

const Index = () => {
  const { data: status } = useSwr(statusUrl, fetcher);

  if (isBrowser) {
    if (status && !status.authenticated) {
      redirectToIdPorten();
    }
  }

  return (
    <Layout>
      <Section lightGreen>
        <div>
          <Heading level="2" size="medium" spacing>
            Utkast
          </Heading>
          <UtkastPanel />
        </div>
      </Section>
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
      <Section lightGray>
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
