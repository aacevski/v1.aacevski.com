/** @type {import('next').NextConfig} */
const withImages = require('next-images');

module.exports = withImages({
  images: {
    domains: ['www.unwrapit.me'],
  },
});
