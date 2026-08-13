# MC Design Build Portfolio

This repository contains the public executive portfolio for **Michael Chandler / MC Design Build**. The production site is configured with the canonical URL `https://mcdesign.bio` and presents selected work, portfolio project details, professional background, process information, and contact paths.

## Implementation

The site is a **static HTML portfolio**. It does not use a Node.js build pipeline or Next.js. The primary pages are plain HTML, with client-side JavaScript for motion and interactive details.

| Area | Implementation |
|---|---|
| Main site | `index.html` |
| Project index | `portfolio.html` |
| Project detail view | `project-detail.html` |
| Portfolio content | `projects-data.js` |
| Styling | Tailwind CSS via CDN plus inline project styles |
| Motion | GSAP and ScrollTrigger via CDN |
| Assets | Local WebP, PNG, JPG, and project-media files |
| Deployment configuration | Cloudflare Pages configuration in `wrangler.toml` |

## Local Preview

Because this is a static site, preview it through a local web server from the repository root. For example:

```bash
npx wrangler pages dev .
```

Then open the local URL printed by the preview server. Verify the home page, portfolio index, project-detail routes, navigation anchors, mailto links, and image assets before deploying.

## Content and Quality Guidelines

Portfolio claims must remain accurate without JavaScript or motion. The featured case-study metrics are therefore rendered as factual static HTML values; animation is a visual enhancement and must not be required for core content.

When adding or updating a project, maintain valid image paths in `projects-data.js`, concise alt text, accurate location and role details, and consistent metric labels and units. Test links and media on desktop and mobile layouts.

## Deployment

The repository is configured for Cloudflare Pages with the repository root as the output directory. See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment and verification guidance.
