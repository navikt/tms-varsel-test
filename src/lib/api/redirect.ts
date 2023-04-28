import { eventTestProducerUrl } from "../urls";

export const redirectToIdPorten = () => {
  window.location.assign(`${eventTestProducerUrl}/login?redirect_uri=https://www.intern.dev.nav.no/tms-varsel-test`);
};
