import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// Enables Cloudflare bindings/env vars during `next dev`.
initOpenNextCloudflareForDev();

export default nextConfig;
