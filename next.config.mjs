/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      // Replace the modularize imports config for next/server with ESM alias
      config.resolve.alias['next/server'] = 'next/dist/server/web/exports';
      return config;
    },
  };
  
  export default nextConfig;
  