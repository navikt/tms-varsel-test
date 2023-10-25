export const isBrowser = typeof window !== "undefined";
export const isLocal = () => process.env.NODE_ENV === "development";
export const isDevelopment = () => isBrowser && window.location.href.includes("www.intern.dev.nav.no");
