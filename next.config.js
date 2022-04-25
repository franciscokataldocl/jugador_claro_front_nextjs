/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://backendjugadorclaro.herokuapp.com/"],
  },
  env: {
    apiurl: process.env.API_URL,
  },
};



module.exports = nextConfig
