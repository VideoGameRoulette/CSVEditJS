const isProd = process.env.NODE_ENV === 'production' | true;

const nextConfig = {
  reactStrictMode: true,
};

if (isProd) {
  nextConfig.basePath = '/CSVEditJS';
  nextConfig.assetPrefix = '/CSVEditJSy';
}

module.exports = nextConfig;
