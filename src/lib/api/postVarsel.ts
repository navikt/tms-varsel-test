import {eventTestProducerUrl} from "../urls";

export const postVarsel = (type: string, content: object) => fetch(`${eventTestProducerUrl}/produce/${type}`, {
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

export const get = (path: string) => fetch(`${eventTestProducerUrl}/${path}`, {
  method: "GET",
  credentials: "include",
  headers: {
    Accept: "text/plain",
  }
});

export const postUtkast = (type: string, content: object) => fetch(`${eventTestProducerUrl}/utkast/${type}`, {
  method: "POST",
  credentials: "include",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    ...content
  })
});
