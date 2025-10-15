/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
        locale: false,
      },
    ];
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 's6.uupload.ir' }],
  },
};

export default nextConfig;
