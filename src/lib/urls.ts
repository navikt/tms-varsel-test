import { isDevelopment, isLocal } from "./utils/environments";

export const getEnvironment = (): "local"|  "production" | "development" => {
  if (isLocal()) {
    return "local";
  }

  if (isDevelopment()) {
    return "development";
  }

  return "production";
};

type EnvUrl = { local:string; development: string; production: string };

const STATUS_URL: EnvUrl = {
  local: "https://localhost:3000/tms-varsel-test/api/status",
  development: "https://www.intern.dev.nav.no/tms-event-test-producer/login/status",
  production: "https://www.nav.no/tms-event-test-producer/login/status",
};

const EVENT_TEST_PRODUCER_URL: EnvUrl = {
  local: "https://localhost:3000/tms-varsel-test/api",
  development: "https://www.intern.dev.nav.no/tms-event-test-producer",
  production: "https://www.nav.no/tms-event-test-producer",
};

export const statusUrl = STATUS_URL[getEnvironment()];
export const eventTestProducerUrl = EVENT_TEST_PRODUCER_URL[getEnvironment()];
