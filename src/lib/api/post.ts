import {eventTestProducerUrl} from "../urls";

export const post = (type: string, content: object) => fetch(`${eventTestProducerUrl}/produce/${type}`, {
  method: "POST",
  credentials: "include",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    grupperingsid: "12345678",
    epostVarslingstekst: null,
    epostVarslingstittel: null,
    smsVarslingstekst: null,
    prefererteKanaler: [],
    ...content
  })
});
