/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "@react-three/drei"],
  },
  transpilePackages: ["three"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
