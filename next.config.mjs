/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NODE_ENV === "production" ? ".next-build" : ".next",
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
