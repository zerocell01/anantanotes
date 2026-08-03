# Ananta Notes

**Catatan belajar Web3** — kumpulan thread, artikel, dan rangkuman dari mentor, trader, dan sumber-sumber belajar Web3 lainnya. Dikurasi dan disusun ulang biar enak dibaca dan gampang dicari lagi kalau butuh referensi.

Dibangun pakai **React + Vite** (SPA, client-side routing) biar cepat dan responsif di PC maupun HP — tiap catatan adalah komponen React sendiri, gambar di-serve sebagai file statis terpisah (bukan base64 inline) supaya bisa di-cache browser.

## Isi

| Catatan | Sumber | Topik |
|---|---|---|
| [Degen Trading Thread](src/pages/DegenTradingObicle.jsx) | [@obicle](https://twitter.com/obicle) | Trading degen / memecoin |

Daftar di atas bakal terus bertambah seiring catatan baru ditambahkan.

## Struktur

```
anantanotes/
├── src/
│   ├── App.jsx                     # landing page + routing
│   ├── notes.js                    # data/metadata semua catatan
│   ├── pages/
│   │   ├── DegenTradingObicle.jsx  # halaman catatan (1 komponen per catatan)
│   │   └── DegenTradingObicle.css  # style khusus catatan tsb (scoped)
│   ├── main.jsx
│   └── index.css                   # style landing page + tema global
├── public/
│   └── notes/assets/               # gambar/asset tiap catatan
├── vercel.json                     # SPA rewrite untuk Vercel
├── index.html                      # entry Vite
└── package.json
```

## Development

```bash
npm install
npm run dev       # dev server
npm run build     # build produksi ke dist/
npm run preview   # preview hasil build
```

## Deploy ke Vercel

1. Import repo ini di https://vercel.com/new
2. Framework preset: **Vite** (otomatis terdeteksi)
3. Build command: `npm run build`, Output directory: `dist`
4. Deploy — setiap push ke `main` otomatis re-deploy.

## Nambah catatan baru

1. Buat komponen baru di `src/pages/NamaCatatan.jsx` (+ CSS-nya sendiri, scoped pakai wrapper class biar tidak bentrok dengan catatan lain).
2. Simpan gambar/asset di `public/notes/assets/nama-catatan/`.
3. Tambahkan route-nya di `src/App.jsx` dan entrinya di array `notes` pada `src/notes.js`.
