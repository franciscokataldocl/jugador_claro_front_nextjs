/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_BASE_URL],
  },
  env: {
    apiurl: process.env.API_URL,
  },
};



module.exports = nextConfig
