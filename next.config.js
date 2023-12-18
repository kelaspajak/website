const path = require('path');
const glob = require('glob');
const compareVersions = require('compare-versions');

module.exports = {
  poweredByHeader: false,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mjs/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
    return config;
  },

  // Next.js config
  async redirects() {
    return [
      {
        source: '/colors/docs',
        destination: '/colors/docs/overview/installation',
        permanent: true,
      },
      {
        source: '/colors/docs/tests/:slug*',
        destination: '/colors',
        permanent: true,
      },
      {
        source: '/docs/colors/palette-composition/the-scales',
        destination: '/colors/docs/palette-composition/scales',
        permanent: true,
      },
      {
        source: '/docs/colors/getting-started/:slug*',
        destination: '/colors/docs/overview/:slug*',
        permanent: true,
      },
      {
        source: '/docs/colors/:slug*',
        destination: '/colors/docs/:slug*',
        permanent: true,
      },
      {
        source: '/themes/docs',
        destination: '/themes/docs/overview/getting-started',
        permanent: false,
      },
    ];
  },
};
