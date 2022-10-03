export const redirectToIdPorten = (redirectUrl: string) => {
  const eventTestProducerUrl = "https://person.dev.nav.no/tms-event-test-producer";
  window.location.assign(`${eventTestProducerUrl}/login?redirect_uri=${redirectUrl}`);
};
