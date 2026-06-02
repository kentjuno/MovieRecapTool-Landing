# MovieRecapTool Landing

Static landing page and docs hub for `recap.kentjuno.com`.

## Deploy To Cloudflare Pages

1. Create a Cloudflare Pages project.
2. Connect the repository that contains this `landing` folder.
3. Set the project build settings:
   - Framework preset: `None`
   - Build command: leave empty
   - Build output directory: `landing`
4. Add custom domain: `recap.kentjuno.com`.
5. Update the download link in `index.html` when the public installer is ready.

## Local Preview

Open `index.html` directly in a browser, or run a simple static server from this folder.

```powershell
python -m http.server 4173
```

Then open `http://127.0.0.1:4173`.

## Content To Update Before Public Launch

- Replace `#download-waitlist` CTA with the real installer URL.
- Add the final SHA256 checksum for the installer.
- Add current version number.
- Closed Facebook group: https://www.facebook.com/groups/kja.ivibecodetutien
- Supporter subscription required for group access: https://www.facebook.com/kentjuno/supporters/?entrypoint_surface=DIRECTORY&surface=directory
- Support policy: primary support by Kent Juno through Facebook/closed group. Closed group access is handled by Facebook supporter subscription.
- Refund policy: no refund for any reason after a license is issued or activated.
- Confirm public pricing copy before launch: lifetime `899K`, 30-day trial `400K` with full lifetime upgrade credit during trial period, 7-day pass `100K` with no lifetime upgrade credit.
- App follow-up: add a post-activation `License Info` or `Copy HWID` action so active trial users can send HWID/license data for upgrade/support without waiting for the lock screen.
- Keep `assets/favicon.ico` and `assets/app-icon.png` in the deploy folder.
- Re-check the GPU/Whisper activation copy before launch:
  - App path includes `activate_gpu.bat` beside `main.exe`.
  - In-app banner still says `Kích hoạt GPU (Tải tự động)`.
  - https://developer.nvidia.com/cuda-downloads
  - https://docs.nvidia.com/cuda/cuda-installation-guide-microsoft-windows/
