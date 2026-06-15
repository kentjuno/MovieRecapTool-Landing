# Color System & Brand Guidelines - MovieRecapTool

This document defines the curated **Ethereal Glass** color system designed for the **MovieRecapTool** landing page. The palette is specially calibrated to be auspicious and harmonious for **tuổi 1990 (Canh Ngọ - Mạng Thổ / Lộ Bàng Thổ)**.

---

## 1. Feng Shui Principles (Tuổi 1990 Mạng Thổ)

- **Tương Sinh (Generative - Fire):** Fire (**Hỏa**) generates Earth (**Thổ**). Vibrant oranges, terracottas, and red hues are highly auspicious and energizing.
- **Tương Hợp (Harmonious - Earth):** Earth (**Thổ**) matches Earth. Golden ambers, warm yellows, and earth-brown tones represent stability and trust.
- **Tương Khắc (Destructive - Wood / Mộc):** Wood (**Mộc**) restricts/destroys Earth. **Avoid all green, emerald, cyan, and teal tones** as primary accents or main graphics.

---

## 2. Color Palette Specification

All values are configured as custom properties in [styles.css](file:///f:/AntiGravity/MovieRecapTool/landing/styles.css) using HSL variables for fluid opacity-based overlays and ambient glassmorphic shadows.

### Primary Accents (Fire / Hỏa)

| Color Token | Hex Code | HSL Value | Description / Usage |
| :--- | :--- | :--- | :--- |
| **`--teal` (Primary)** | `#ee5422` | `hsl(18, 88%, 52%)` | **Vibrant Terracotta**: Primary action buttons, highlight borders, core active states. |
| **`--orange`** | `#ff7300` | `hsl(28, 100%, 50%)` | **Fire Orange**: Special attention CTAs, key interactive hover states. |

### Secondary Accents (Earth / Thổ)

| Color Token | Hex Code | HSL Value | Description / Usage |
| :--- | :--- | :--- | :--- |
| **`--teal-2` (Secondary)** | `#f5a747` | `hsl(36, 92%, 62%)` | **Sunset Amber**: Secondary accents, decorative icons, code blocks, kickers. |

### Warm Base & Soil Surfaces

| Color Token | Hex Code | HSL Value | Description / Usage |
| :--- | :--- | :--- | :--- |
| **`--base`** | `#131110` | `hsl(24, 10%, 6%)` | **Deep Warm Charcoal**: Root background color (solid and gradient start). |
| **`--panel`** | `#1b1918` | `hsl(24, 8%, 9%)` | **Warm Charcoal Panel**: Outer bezel card shells, navigation panels. |
| **`--panel-2`** | `#23201f` | `hsl(24, 7%, 12%)` | **Slightly Lighter Panel**: Inner core content boxes, inputs. |
| **`--line`** | `#322d2c` | `hsl(24, 6%, 18%)` | **Warm Line**: Subdued border lines, divider rules. |

### Typography & Muted Grays

| Color Token | Hex Code | HSL Value | Description / Usage |
| :--- | :--- | :--- | :--- |
| **`--ink`** | `#f5f2ed` | `hsl(30, 25%, 94%)` | **Creamy Warm White**: Primary headings, legible body copy, active text. |
| **`--muted`** | `#a6a29e` | `hsl(30, 5%, 65%)` | **Warm Muted Gray**: Standard description text, labels. |
| **`--dim`** | `#75716e` | `hsl(30, 5%, 45%)` | **Warm Dim Gray**: Footers, placeholders, disabled indicators. |

### Status Indicators (Utility Colors)

| Color Token | Hex Code | HSL Value | Description / Usage |
| :--- | :--- | :--- | :--- |
| **`--red`** | `#ff5a5f` | `hsl(358, 100%, 68%)` | **Utility Red**: Danger states, no-refund policies, delete mock actions. |
| **`--green`** | `#6be09b` | `hsl(144, 64%, 65%)` | **Utility Green**: Success statuses, "Done" state indicators. |

---

## 3. Usage & Layout Rules

### Ambient Glows & Glassmorphism
Use HSL color variables combined with opacity to construct fluid outer borders and soft, diffused glows:
- **Outer Borders:** `border: 1px solid rgba(255, 255, 255, 0.05)` or `border: 1px solid rgba(238, 84, 34, 0.15)` for cards.
- **Diffused Shadow Glow:**
  ```css
  box-shadow: 0 10px 25px rgba(238, 84, 34, 0.35); /* Terracotta glow */
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.05); /* Muted overlay */
  ```

### Background Mesh Gradients
Always blend base layers with subtle warm terracotta/orange gradients to maintain depth and visual interest without breaking the page's structure:
```css
background-image: 
  radial-gradient(var(--line) 1px, transparent 1px),
  radial-gradient(circle at 14% 8%, rgba(238, 84, 34, 0.1), transparent 32%),
  radial-gradient(circle at 82% 18%, rgba(255, 137, 8, 0.07), transparent 30%),
  linear-gradient(135deg, #161311 0%, #131110 54%, #1e150f 100%);
```

### Future Asset Design (Images, Banners, Vector Icons)
When creating product screenshots, illustration banners, or video assets for this page:
1. **Backgrounds:** Use deep warm grays (`#131110` / `#1b1918`). Avoid cold blue-black or pure black backgrounds.
2. **Accents:** Use terracotta `#ee5422` as the dominant brand color.
3. **Illustrations:** Blend sunset amber `#f5a747` for details, highlights, or secondary graphs.
4. **Contrast:** Keep text content in creamy white `#f5f2ed` to match the rest of the interface seamlessly.
