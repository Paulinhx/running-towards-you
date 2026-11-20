# Running Towards You — additive security and SEO notes

These files were prepared from the uploaded ZIP `running-towards-you-v6-final-review(2).zip`.
**No existing HTML, CSS, JavaScript, README, images, or SoundCloud implementation was changed.**

## Included
- `_headers`: Cloudflare Pages security headers and a CSP matching the uploaded code. The inline email click handler on `legal.html` is allowed by its exact SHA-256 hash, rather than enabling all inline JavaScript.
- `robots.txt`: permits crawling and advertises the sitemap.
- `sitemap.xml`: lists the public homepage. `legal.html` is intentionally excluded because it has a `noindex` meta tag.

## Important caveats
- **Do not assume these files complete a privacy or accessibility audit.** The existing SoundCloud iframe loads immediately, and was deliberately left unchanged at the owner's request. Visitors may contact SoundCloud on page load. YouTube uses a click-to-load iframe.
- The CSP hash is tied to the exact inline `<script>` in `legal.html` from this ZIP. If you change that script, update the CSP hash or move the handler into an external script; otherwise the legal email button will stop working.
- The CSP applies to top-level pages; external SoundCloud and YouTube iframes have their own policies.
- Some Cloudflare responses, redirects, or Worker-generated content may not receive Pages `_headers` rules.
- This is a baseline policy, not proof of comprehensive security. Test live after deployment, especially the legal email button, video playback, SoundCloud, gallery, and navigation.
- Verify the real HTTP response headers in browser DevTools or with `curl -I https://running-towards-you.pages.dev/`.
- Check browser DevTools Console for CSP violations.
- Run Lighthouse and keyboard/screen-reader tests separately. No automated accessibility fixes were applied because existing code was not to be changed.
- SEO: the uploaded homepage has an Open Graph image specified by a relative URL; a full social-preview and canonical audit would require editing HTML, which was intentionally not done.
- The supplied archive contains a `.git` directory; it is not included in this additive package.

## Installation
Copy the four files into the existing website root beside `index.html`, then `git add _headers robots.txt sitemap.xml AUDIT-NOTES.md`, commit, and push. Do not replace existing files.
