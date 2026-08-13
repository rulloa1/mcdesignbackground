# Deployment and Infrastructure

## Hosting Model

The portfolio is a static site configured for **Cloudflare Pages**. The repository root is the deployment output directory, as defined in `wrangler.toml`.

| Setting | Value |
|---|---|
| Pages project name | `mcdesignbackground` |
| Build command | None required |
| Output directory | `.` (repository root) |
| Runtime configuration | No server-side environment variables required for the current static site |
| Media assets | Served from version-controlled local paths under the repository |

## Deployment Workflow

A production deployment should be triggered from the tracked default branch through the Cloudflare Pages GitHub integration. Before publishing, preview the site locally and confirm that all linked pages and required assets resolve.

## Post-Deployment Verification

After each deployment, verify the canonical site and its key paths:

| Check | Expected result |
|---|---|
| `https://mcdesign.bio` | Home page loads with accurate static portfolio metrics |
| `portfolio.html` | Full project index loads and each cover image resolves |
| `project-detail.html?id=<project-id>` | A valid project renders for each featured project ID |
| Navigation anchors | About, Selected Works, Philosophy, Process, and Contact links move to the intended sections |
| Contact paths | Email uses the correct `mailto:` address and LinkedIn opens safely in a new tab |
| Social metadata | Canonical URL, Open Graph title, description, and preview image match the public site |

Do not rely on animation to render business-critical claims. Any figures used in portfolio content must be correct in the initial HTML response and remain accurate when motion is unavailable.
