/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/with-modal",
        },
        {
          source: "/photo/:path*",
          destination: "/with-modal/photo/:path*",
          has: [
            {
              type: "header",
              // is soft nav:
              key: "next-url",
            },
          ],
        },
      ],
      fallback: [
        {
          source: "/with-modal/:path*",
          destination: "/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
