# MovieRecapTool Landing

Public landing page for MovieRecapTool.

Live/release repo:

```text
https://github.com/kentjuno/MovieRecapTool-Landing/releases
```

## What This Repo Contains

- Static landing page files only.
- Public product information.
- Download links to GitHub Releases.
- Installation and support instructions.

This repo must not contain the private app source code.

## Files

```text
index.html
styles.css
main.js
assets/
_headers
```

## GitHub Pages Setup

1. Push these landing files to the public repo:

```text
kentjuno/MovieRecapTool-Landing
```

2. Open GitHub repo settings.
3. Go to `Settings > Pages`.
4. Select:

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

5. Save and wait for GitHub Pages to deploy.

## GitHub Releases Setup

Upload installer files in GitHub Releases, not into git.

Recommended release assets:

```text
MovieRecapTool_Setup_v1.0.0.exe
MovieRecapTool_Setup_v1.0.0-manifest.txt
```

Release page:

```text
https://github.com/kentjuno/MovieRecapTool-Landing/releases
```

The landing page download button currently points to the release page above.

## Local Preview

Run from this folder:

```powershell
python -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173
```

## Public Pricing Copy

- Lifetime license: `899K`.
- 30-day trial: `400K`.
- 30-day trial can be credited toward lifetime upgrade during the active trial period.
- 7-day pass: `100K`.
- 7-day pass is not credited toward lifetime upgrade.

## Support Links

Facebook:

```text
https://fb.com/kentjuno
```

Closed group:

```text
https://www.facebook.com/groups/kja.ivibecodetutien
```

Supporter subscription:

```text
https://www.facebook.com/kentjuno/supporters/?entrypoint_surface=DIRECTORY&surface=directory
```

## Release Checklist

1. Upload the latest installer to GitHub Releases.
2. Upload the release manifest/checksum file.
3. Confirm the landing download button points to the correct release page.
4. Test the installer download from a browser that is not logged into GitHub.
5. Test app activation with a real license key.
6. Confirm NVIDIA/GPU guidance is still accurate.
7. Confirm support and no-refund policy copy is visible on the landing page.

## Do Not Commit

- Private source code.
- License private keys.
- Admin tokens.
- `.env` files.
- Built installer `.exe` files.
- Local customer/license data.
