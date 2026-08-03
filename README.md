# Ananta Notes

**Catatan belajar Web3** — kumpulan thread, artikel, dan rangkuman dari mentor, trader, dan sumber-sumber belajar Web3 lainnya. Dikurasi dan disusun ulang biar enak dibaca dan gampang dicari lagi kalau butuh referensi.

Dibangun pakai **React + Vite** (SPA, client-side routing) biar cepat dan responsif di PC maupun HP — tiap catatan adalah komponen React sendiri, gambar di-serve sebagai file statis terpisah (bukan base64 inline) supaya bisa di-cache browser. Ada toggle tema terang/gelap yang tersimpan otomatis.

## Isi

| Catatan | Sumber | Topik |
|---|---|---|
| [Degen Trading Thread](src/pages/DegenTradingObicle.jsx) | [@obicle](https://twitter.com/obicle) | Trading degen / memecoin |
| [Arbitrage From Zero #1](src/pages/ArbitrageUyar121.jsx) | [@Uyar121](https://twitter.com/Uyar121) | Cross-chain arbitrage |
| [Arbitrage From Zero #2](src/pages/ArbitrageUyar121Screening.jsx) | [@Uyar121](https://twitter.com/Uyar121) | Screening arbitrage opportunity |

Daftar di atas bakal terus bertambah seiring catatan baru ditambahkan.

## Struktur

```
anantanotes/
├── src/
│   ├── App.jsx                     # landing page + routing
│   ├── notes.js                    # data/metadata semua catatan
│   ├── ThemeContext.jsx            # state tema terang/gelap
│   ├── ThemeToggle.jsx             # tombol toggle tema
│   ├── pages/
│   │   ├── DegenTradingObicle.jsx  # 1 komponen per catatan
│   │   └── ArbitrageUyar121.jsx
│   ├── styles/
│   │   └── note-page.css           # style bersama utk semua halaman catatan
│   ├── main.jsx
│   └── index.css                   # token warna tema + style landing page
├── public/
│   └── notes/assets/               # gambar/asset tiap catatan (per folder slug)
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

1. Buat komponen baru di `src/pages/NamaCatatan.jsx`, import `../styles/note-page.css`, dan bungkus isinya dengan `<div className="note-page">` — style umum (layout, sidebar, callout, tabel, dst) sudah otomatis kepakai dan ikut tema terang/gelap.
2. Simpan gambar/asset (termasuk avatar penulis) di `public/notes/assets/nama-catatan/`.
3. Tambahkan route-nya di `src/App.jsx` dan entrinya (termasuk field `avatar`) di array `notes` pada `src/notes.js` biar muncul di landing page.
4. Kalau catatan butuh elemen visual unik yang belum ada di `note-page.css` (misal candlestick signature-nya @obicle), taruh style tambahan itu di file CSS terpisah khusus catatan tsb, jangan modifikasi `note-page.css` langsung.
