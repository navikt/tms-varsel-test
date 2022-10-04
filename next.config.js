/** @type {import('next').NextConfig} */

const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig = {
  basePath: isDevelopment ? "" : "/tms-varsel-test",
  trailingSlash: true,
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    urlImports: ['https://cdn.skypack.dev'],
  },
};

module.exports = nextConfig;
