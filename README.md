# VS-HCI documentation

The customer-facing documentation site for **VS-HCI** by Velarion Systems, built with
Jekyll and published with GitHub Pages.

The design is the portal's (velarionsystems.com): the same surface ramp, cyan accent,
Inter/JetBrains Mono pairing and pill shapes, so the docs and the product site read as one
thing. Fonts are vendored in `assets/fonts` rather than fetched from a CDN, for the reason
the portal self-hosts them — a webfont request to a third party carries every visitor's IP
to that third party.

## Layout

```
_config.yml           site settings, and the url/baseurl switch
_data/nav.yml         the whole site map — order, sections, titles
_layouts/             base, doc (sidebar + TOC), home
_includes/            head, header, sidebar, footer, icons, logo
assets/css/docs.css   the design system, ported from the portal
assets/js/docs.js     TOC, sidebar filter, mobile nav, callouts
index.html            the docs landing page
<section>/*.md        the pages themselves
```

## Writing a page

Every page is Markdown with three front-matter keys:

```markdown
---
title: "Live migration"
description: "Moving a running VM to another host without shutting it down."
status: draft
---
```

`title` and `description` render as the page heading and lede. `status: draft` puts an
amber dot beside the page in the sidebar and a banner at the top — **delete that line when
the page is written.** That is the whole progress-tracking mechanism.

`##` and `###` headings build the "On this page" rail automatically; nothing lists them.

### Callouts

A blockquote that opens with a bold label becomes a callout:

```markdown
> **Note** — the disk minimum is enforced by the installer.
> **Warning** — this can isolate a host.
> **Danger** — this destroys data.
```

### Adding a page

1. Create the `.md` file under the right section directory.
2. Add a line to `_data/nav.yml` under the section it belongs to.

Order in `nav.yml` is the order in the sidebar *and* the previous/next links at the foot of
each page. Nothing else needs touching.

## Previewing locally

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Publishing

GitHub Pages builds this natively — there is no Actions workflow and no build step to run.

1. Push to `main`.
2. **Settings → Pages → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Set the site address in `_config.yml`:

   | Where it is served | `url` | `baseurl` |
   |---|---|---|
   | `docs.velarionsystems.com` | `https://docs.velarionsystems.com` | `""` |
   | `<user>.github.io/docs` | `https://<user>.github.io` | `"/docs"` |

   Every link goes through `relative_url`, so those two lines are the only change.

For a custom domain, add a `CNAME` file containing the hostname and point a DNS `CNAME`
record at `<user>.github.io`.
