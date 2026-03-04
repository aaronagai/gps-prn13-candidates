# GPS PRN-13 — Candidate Directory

A clean, interactive candidate directory for the **Gabungan Parti Sarawak (GPS)** coalition, built for the **13th Sarawak State Election (PRN-13) 2026**.

🔗 **Live site:** [aaronagai.github.io/gps-prn13-candidates](https://aaronagai.github.io/gps-prn13-candidates)

---

## Features

### Candidate Grid
- All 82 GPS candidates across 9 zones
- Candidate headshot photos with initials + party colour fallback
- **Incumbent / Challenger** badge on each card
- Click any card to open a detailed candidate profile modal

### Search & Filter
- Live search by candidate name, DUN, or constituency
- Multi-select filters: **Party**, **Race**, **Parliament**, **Status** (Incumbent / Challenger)
- Sort by: **DUN No**, **Name A–Z**, **Party**
- Filter badge indicator when filters are active
- Clear all filters button

### Explore the Roster (Swipe Stack)
- Swipe or drag cards left/right to browse candidates
- Tap the front card to open the candidate profile modal
- Arrow buttons for keyboard-friendly navigation

### Bilingual Support
- Toggle between **English** and **Bahasa Malaysia**
- All labels, filters, and UI text translated

### PWA (Progressive Web App)
- Installable on Android and iOS homescreen
- Offline support via service worker — core assets and viewed photos are cached
- Teal app icon with "GPS" branding

---

## Parties

| Party | Full Name | Colour |
|-------|-----------|--------|
| PBB | Parti Pesaka Bumiputera Bersatu | Red |
| SUPP | Sarawak United People's Party | Yellow |
| PRS | Parti Rakyat Sarawak | Green |
| PDP | Parti Demokratik Progresif | Blue |

---

## Tech Stack

- Vanilla HTML / CSS / JavaScript — no frameworks
- [Tailwind CSS](https://tailwindcss.com) via CDN
- GitHub Pages hosting
- Service Worker for offline caching

---

## Adding / Updating Candidate Photos

1. Name the file by DUN number — e.g. `N26.jpg`
2. Place it in the `photos/` folder
3. The card and modal will display it automatically; cards without a photo show an initials avatar

## Updating the Candidate List

If candidates change, provide the updated data as a CSV or table with these columns:

```
DUN No | Name | DUN Name | Party | Zone | Parliamentary | Race
```

---

Built by [@aaronagai](https://x.com/aaronagai) · [st.aaronagai@gmail.com](mailto:st.aaronagai@gmail.com)
