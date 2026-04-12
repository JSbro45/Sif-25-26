import type { NextConfig } from "next";
// Disable Next.js dev indicators (like the React Query devtools overlay)
const disableDevIndicators = {
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: "bottom-right",
  },
};

const nextConfig: NextConfig = {
  /* config options here */
  
};

export default nextConfig;
