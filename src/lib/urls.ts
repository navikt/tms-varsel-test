import { isProduction } from "./utils/environments";

export const getEnvironment = (): "production" | "development" => {
  if (isProduction()) {
    return "production";
  }

  return "development";
};

type EnvUrl = { development: string; production: string };

const STATUS_URL: EnvUrl = {
  development: "https://localhost:3000/tms-varsel-test/api/status",
  production: "https://www.intern.dev.nav.no/tms-event-test-producer/login/status",
};

const EVENT_TEST_PRODUCER_URL: EnvUrl = {
  development: "https://localhost:3000/tms-varsel-test/api",
  production: "https://www.intern.dev.nav.no/tms-event-test-producer",
};

export const statusUrl = STATUS_URL[getEnvironment()];
export const eventTestProducerUrl = EVENT_TEST_PRODUCER_URL[getEnvironment()];
