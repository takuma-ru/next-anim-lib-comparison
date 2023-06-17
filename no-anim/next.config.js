const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.resolve(__dirname, "src/assets/styles")],
    prependData: '@import "variables.scss";',
  },
};

module.exports = nextConfig;
