import { rest } from "msw";

export const handlers = [
  rest.get('https://localhost:3000/tms-varsel-test/api/status', (_req, res, ctx) => {
    return res(
      ctx.status(200), ctx.json({ authenticated: true })
    )
  }),
  rest.post('https://localhost:3000/tms-varsel-test/api/produce/beskjed', (_req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.post('https://localhost:3000/tms-varsel-test/api/produce/oppgave', (_req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.post('https://localhost:3000/tms-varsel-test/api/produce/innboks', (_req, res, ctx) => {
    return res(ctx.status(200))
  }),
]
