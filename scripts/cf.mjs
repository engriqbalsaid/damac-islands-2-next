// Cloudflare Workers Builds helper.
// `wrangler deploy` delegates to `opennextjs-cloudflare deploy`, which needs the OpenNext bundle to be built first.
// - `postinstall`: on Cloudflare CI only (WORKERS_CI=1), make sure the bundle exists even if the dashboard
//   build command is not `npm run build`.
// - `build`: run the OpenNext build, unless the postinstall step has already produced it in this CI run.
import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

const mode = process.argv[2];
const marker = ".open-next/.build/open-next.config.mjs";
const onCloudflareCI = Boolean(process.env.WORKERS_CI);

if (mode === "postinstall" && !onCloudflareCI) process.exit(0);
if (existsSync(marker) && onCloudflareCI) {
  console.log(`[cf] OpenNext bundle already built, skipping (${mode})`);
  process.exit(0);
}

console.log(`[cf] running OpenNext build (${mode})`);
const r = spawnSync("npx", ["opennextjs-cloudflare", "build"], { stdio: "inherit", shell: process.platform === "win32" });
process.exit(r.status ?? 1);
