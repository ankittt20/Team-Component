/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.pexels.com",
      "images.unsplash.com",
      "media.licdn.com",
      "drive.google.com",
      "img.icons8.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
