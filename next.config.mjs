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
};

export default nextConfig;
