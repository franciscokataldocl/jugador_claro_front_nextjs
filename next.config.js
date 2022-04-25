/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  env: {
    apiurl: process.env.API_URL,
  },
};



module.exports = nextConfig
