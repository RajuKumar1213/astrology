import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  experimental: {
    turbo: {
      rules: {
        '*.jsx': {
          loaders: ['@babel/preset-react'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
