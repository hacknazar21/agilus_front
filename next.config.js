/** @type {import('next').NextConfig} */
const API_URL = process.env.API_URL;
const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_URL}/api/:path*/`,
      },
    ];
  },
};

module.exports = nextConfig;
