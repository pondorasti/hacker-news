/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    runtime: "experimental-edge",
    fontLoaders: [{ loader: "@next/font/google", options: { subsets: ["latin"] } }],
  },
}

module.exports = nextConfig
