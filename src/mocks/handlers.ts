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
  rest.post('https://localhost:3000/tms-varsel-test/api/utkast/create', (_req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.post('https://localhost:3000/tms-varsel-test/api/utkast/update', (_req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.post('https://localhost:3000/tms-varsel-test/api/utkast/delete', (_req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.get('https://localhost:3000/tms-varsel-test/api/uuid/generate', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.text("2c90f681-f40c-4dba-9ac3-878e5c8cfec4"))
  }),
  rest.get('https://localhost:3000/tms-varsel-test/api/ulid/generate', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.text("01GJ0DERRP1ATBX1C0RJ3FM3RG"))
  }),
]
