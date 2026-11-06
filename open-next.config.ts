import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Pages are prerendered, so they are served straight from static assets.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
