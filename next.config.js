/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["uploads-ssl.webflow.com", "cdn-icons-png.flaticon.com"]
  }
}

module.exports = nextConfig
