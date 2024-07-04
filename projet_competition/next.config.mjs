export default {
  images: {
    domains: ['s3-alpha-sig.figma.com'],
  },
  webpack(config, { dev, isServer }) {
    return config;
  },
};