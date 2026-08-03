import { Link } from 'react-router-dom'
import { useActiveSection } from '../hooks/useActiveSection.js'
import '../styles/note-page.css'

const TOC = [
  ['s1', 'Cek Aset Di-support'],
  ['s2', 'Wormhole - EVM'],
  ['s3', 'Wormhole - Solana'],
  ['s4', 'CCIP - EVM'],
  ['s5', 'CCIP - Solana'],
  ['s6', 'LayerZero - EVM'],
  ['s7', 'LayerZero - Solana'],
  ['s8', 'Kesimpulan'],
]

const SECTION_IDS = TOC.map(([id]) => id)

const AVATAR = '/notes/assets/arbitrage-uyar121/avatar.jpg'
const IMG = (name) => `/notes/assets/arbitrage-uyar121-find-bridge/${name}`

export default function ArbitrageUyar121FindBridge() {
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <div className="note-page accent-purple">
      <div className="grid-bg" />
      <div className="layout">
        <aside>
          <Link className="back-link" to="/">
            ← Ananta Notes
          </Link>
          <div className="author-row">
            <img className="avatar" src={AVATAR} alt="@Uyar121" />
            <div className="brand">
              Thread archive · <strong>@Uyar121</strong>
            </div>
          </div>
          <h1>Arbitrage From Zero #5</h1>
          <nav className="toc">
            {TOC.map(([id, label], i) => (
              <a key={id} href={`#${id}`} className={id === activeId ? 'active' : undefined}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <main>
          <div className="hero">
            <div className="ticker">live thread · rangkuman &amp; penjelasan</div>
            <h1 className="title">
              Find The <span>Right Bridge</span>
            </h1>
            <div className="byline">
              <img className="avatar avatar-lg" src={AVATAR} alt="@Uyar121" />
              <span>
                oleh <strong>@Uyar121</strong>
              </span>
            </div>
            <p className="subtitle">
              #5: Penutup seri Arbitrage From Zero - cara cepat ngecek satu token
              sebenarnya pakai jalur bridge yang mana, biar gak telat nangkep spread
              gara-gara nyasar nyari tools.
            </p>
            <div className="disclaimer">
              ⚠ konten ini adalah rangkuman edukasi/strategi milik pembuat thread
              aslinya (@Uyar121). arbitrage &amp; bridging antar-chain tetap berisiko -
              bukan rekomendasi finansial.
            </div>
            <figure>
              <img src={IMG('img-01-cover.jpg')} alt="Arbitrage from Zero #5: Find the Right Bridge" />
            </figure>
          </div>

          <section className="chapter" id="s1">
            <div className="eyebrow">
              <span className="n">01</span> / Cara Cepat
            </div>
            <h2>Jalur Paling Gampang: Cek Aset yang Di-support</h2>
            <p>
              Udah paham konsep 3 bridge raksasa di crypto (LayerZero, Wormhole,
              Chainlink CCIP), tapi pas mau eksekusi malah mentok di satu pertanyaan
              sederhana: <em>"Ini token X sebenernya pakai bridge yang mana sih?"</em>{' '}
              Wajar, dan buat arbitrader, telat nge-bridge = telat nangkep spread
              gurih. Sebelum ribet, coba langsung meluncur ke situs masing-masing
              bridge:
            </p>
            <ul className="list">
              <li>
                <strong>LayerZero</strong> - cek langsung di daftar OFT (Omnichain
                Fungible Token)
              </li>
              <li>
                <strong>Wormhole</strong> - cek di menu Assets Secured
              </li>
              <li>
                <strong>Chainlink CCIP</strong> - langsung cari di Chainlink direktori
              </li>
            </ul>
          </section>

          <section className="chapter" id="s2">
            <div className="eyebrow">
              <span className="n">02</span> / Jalur On-Chain
            </div>
            <h2>🪱 Wormhole - EVM (Contoh: Token $MGP)</h2>
            <p>
              Kalau info di situs bridge masih kurang jelas, waktunya main di scanner
              (BscScan, Etherscan, Solscan, dll). Buka Contract Address (CA) token di
              scanner (misal BscScan), lalu cek tab <strong>"Holders"</strong>. Kalau
              di situ ada tulisan "Wormhole Bridge", token itu pakai Wormhole.
            </p>
            <figure>
              <img src={IMG('img-02-wormhole-holders-tab.jpg')} alt="Tab Holders BscScan menampilkan Wormhole Token Bridge" />
            </figure>
            <h3>Cara cari CA di chain tujuan</h3>
            <ol className="steps">
              <li>Copy CA di chain asal, masuk ke Token Verifier, lalu pilih target chain</li>
              <li>
                Atau di tab Holders, klik "Wormhole Bridge" - nanti transaksinya
                ke-filter. Copy Tx Hash-nya, masukin ke Wormholescan, akan ketemu jejak
                orang nge-bridge dari chain asal ke tujuan
              </li>
            </ol>
          </section>

          <section className="chapter" id="s3">
            <div className="eyebrow">
              <span className="n">03</span> / Jalur On-Chain
            </div>
            <h2>Wormhole - Solana</h2>
            <p>Di ekosistem Solana, ada 3 cara ngecek dari yang paling instan:</p>
            <ol className="steps">
              <li>
                <strong>Nama Token</strong> - indikator paling gampang. Kalau di akhir
                nama tokennya ada embel-embel "(Wormhole)", udah jelas jalurnya
              </li>
              <li>
                <strong>Cek Authority</strong> - kalau dari nama gak kelihatan, buka
                tokennya di Solscan dan cek bagian Authority. Kalau isinya Wormhole,
                confirm itu bridge-nya
              </li>
              <li>
                <strong>Filter Action Mint/Burn</strong> - masih di Solscan, filter
                action ke "Mint" atau "Burn". Klik ikon mata di detail transaksinya -
                kalau nemu jejak/tulisan Wormhole, fixed itu jalurnya
              </li>
            </ol>
            <figure>
              <img src={IMG('img-03-wormhole-solscan-authority.jpg')} alt="Solscan menampilkan Authority Wormhole Mint Authority" />
              <figcaption>Contoh: Apu Apustaja (Wormhole) di Solscan</figcaption>
            </figure>
          </section>

          <section className="chapter" id="s4">
            <div className="eyebrow">
              <span className="n">04</span> / Jalur On-Chain
            </div>
            <h2>⛓️ Chainlink CCIP - EVM (Contoh: Token $SLX)</h2>
            <p>
              Buka CA token di BscScan. Masuk ke menu <strong>Contract &gt; Read
              Contract</strong>. Kalau nemu fungsi <strong>"getCCIPAdmin"</strong>,
              berarti bridge-nya pakai Chainlink. Opsi lain, cek tab{' '}
              <strong>Transactions</strong> - kalau metode action-nya adalah{' '}
              <strong>"CCIP Send"</strong>, jalurnya udah pasti CCIP.
            </p>
            <figure>
              <img src={IMG('img-04-ccip-read-contract.jpg')} alt="Read Contract BscScan menampilkan fungsi getCCIPAdmin dan aksi CCIP Send" />
            </figure>
          </section>

          <section className="chapter" id="s5">
            <div className="eyebrow">
              <span className="n">05</span> / Jalur On-Chain
            </div>
            <h2>Chainlink CCIP - Solana</h2>
            <p>
              Sedikit tricky tapi bisa diakali. Buka Solscan, lalu filter action
              "Mint" (tanda aset masuk) atau "Burn" (tanda aset keluar dari bridge).
              Klik aja tx hash-nya - kalau ada tulisan "ccip", maka itulah bridge-nya.
              Contohnya token elizaOS:
            </p>
            <figure>
              <img src={IMG('img-05-ccip-solscan-elizaos.jpg')} alt="Instruksi Ccip_send pada Chainlink CCIP Router di Solscan untuk token elizaOS" />
            </figure>
          </section>

          <section className="chapter" id="s6">
            <div className="eyebrow">
              <span className="n">06</span> / Jalur On-Chain
            </div>
            <h2>🔵 LayerZero - EVM (Contoh: Token $DEUS)</h2>
            <p>
              Ini yang paling gampang! Cek CA tokennya di CoinGecko. Kalau CA di chain
              asal (misal Solana) dan chain tujuan (misal Peaq) itu{' '}
              <strong>sama persis</strong>, kemungkinan besar itu adalah OFT dari
              LayerZero.
            </p>
            <figure>
              <img src={IMG('img-06-layerzero-coingecko-ca.png')} alt="CoinGecko menampilkan contract address DEUS yang sama di Solana dan Peaq" />
            </figure>
          </section>

          <section className="chapter" id="s7">
            <div className="eyebrow">
              <span className="n">07</span> / Jalur On-Chain
            </div>
            <h2>LayerZero - Solana</h2>
            <p>
              Caranya mirip. Buka Solscan &gt; filter action "Mint/Burn". Kalau ada
              tulisan atau signature LayerZero, selesai urusan. Contoh cek token DEUS
              (xmaquina) di Solscan:
            </p>
            <figure>
              <img src={IMG('img-07-layerzero-solscan-filter.jpg')} alt="Filter Mint/Burn di Solscan untuk token DEUS" />
            </figure>
            <figure>
              <img src={IMG('img-08-layerzero-endpoint-tag.jpg')} alt="Tag LayerZero Endpoint pada transaksi Burn token DEUS" />
            </figure>
          </section>

          <section className="chapter" id="s8">
            <div className="eyebrow">
              <span className="n">08</span> / Penutup
            </div>
            <h2>Kesimpulan</h2>
            <div className="callout tip">
              Proses identifikasi bridge ini emang kelihatannya agak ribet di awal.
              Tapi percayalah, kalau udah terbiasa, praktiknya bisa dalam hitungan
              detik. Pilih aja metode mana yang paling pas buat gaya riset masing-masing.
            </div>
            <p>
              Dengan ini, seri Arbitrage From Zero udah lengkap: dari konsep dasar
              (#1), cara screening opportunity (#2), sampai kenal 3 tools bridge utama
              - LayerZero (#1), Wormhole (#3), Chainlink CCIP (#4) - dan sekarang cara
              cepat mengenali jalur bridge sebuah token (#5).
            </p>
          </section>

          <footer>rangkuman thread @Uyar121 · dirapikan untuk arsip pribadi</footer>
        </main>
      </div>
    </div>
  )
}
