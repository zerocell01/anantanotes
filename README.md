# Ananta Notes

**Catatan belajar Web3** — kumpulan thread, artikel, dan rangkuman dari mentor, trader, dan sumber-sumber belajar Web3 lainnya. Dikurasi dan disusun ulang biar enak dibaca dan gampang dicari lagi kalau butuh referensi.

Dibangun pakai **React + Vite** biar landing page-nya cepat dan responsif di PC maupun HP.

## Isi

| Catatan | Sumber | Topik |
|---|---|---|
| [Degen Trading Thread](public/notes/degen-trading-obicle.html) | [@obicle](https://twitter.com/obicle) | Trading degen / memecoin |

Daftar di atas bakal terus bertambah seiring catatan baru ditambahkan.

## Struktur

```
anantanotes/
├── src/
│   ├── App.jsx          # landing page (daftar catatan)
│   ├── notes.js         # data/metadata semua catatan
│   ├── main.jsx
│   └── index.css
├── public/
│   └── notes/           # isi tiap catatan/thread (1 file HTML statis per catatan)
├── index.html           # entry Vite
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

1. Simpan catatan baru sebagai file HTML statis di `public/notes/`.
2. Tambahkan entrinya ke array `notes` di `src/notes.js`.
