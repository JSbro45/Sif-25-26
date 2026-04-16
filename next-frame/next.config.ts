import type { NextConfig } from "next";
// Disable Next.js dev indicators (like the React Query devtools overlay)
const disableDevIndicators = {
};

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false
  
};

export default nextConfig;
