import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// The page is fully static and the only dynamic route (/api/lead) is uncached, so no incremental cache is needed.
// `buildCommand` makes OpenNext run the plain Next.js build (so `npm run build` can safely be the OpenNext build).
export default {
  ...defineCloudflareConfig({}),
  buildCommand: "npx next build",
};
