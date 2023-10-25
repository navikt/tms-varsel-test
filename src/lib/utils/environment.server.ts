export const isLocal = process.env.NODE_ENV === "development";
const isDevelopment = process.env.NAIS_CLUSTER_NAME === "dev-gcp";

export const getDecoratorEnvironment = (): "prod" | "dev" => {

  if (isLocal) {
    return "dev"
  }

  if (isDevelopment) {
    return "dev";
  }

  return "prod";
};
