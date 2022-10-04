export const post = (type: string, content: object) => fetch(`https://person.dev.nav.no/tms-event-test-producer/produce/${type}`, {
  method: "POST",
  credentials: "include",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    grupperingsid: "12345678",
    synligFremTil: null,
    epostVarslingstekst: null,
    epostVarslingstittel: null,
    smsVarslingstekst: null,
    prefererteKanaler: [],
    ...content
  })
});
