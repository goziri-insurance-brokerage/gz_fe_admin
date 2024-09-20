/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/users",
        permanent: false,
      },
      {
        source: "/dashboard",
        destination: "/users",
        permanent: false,
      },
    ];
  },
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_TOKEN_EXPIRE_AT_MS: process.env.NEXT_PUBLIC_TOKEN_EXPIRE_AT_MS,
  },
};

export default nextConfig;
