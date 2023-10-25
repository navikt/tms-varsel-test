export const isLocal = () => process.env.NODE_ENV === "development";
export const isDevelopment = () => process.env.NODE_ENV === "production";
export const isProduction = () => process.env.NODE_ENV === "production";
export const isBrowser = typeof window !== "undefined";
