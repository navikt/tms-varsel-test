export const isLocal = () => process.env.NODE_ENV === "development";
export const isDevelopment = () => window.location.href.includes("www.intern.dev.nav.no");
export const isBrowser = typeof window !== "undefined";
