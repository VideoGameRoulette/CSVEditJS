const isDev = process.env.NODE_ENV !== 'production';

const nextConfig = {
  reactStrictMode: true,
  basePath: isDev ? '' : '/CSVEditJS',
  assetPrefix: isDev ? '' : '/CSVEditJS',
};

module.exports = nextConfig;
