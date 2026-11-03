import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// The page is fully static and the only dynamic route (/api/lead) is uncached, so no incremental cache is needed.
export default defineCloudflareConfig({});
