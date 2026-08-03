import { Link } from 'react-router-dom'
import { useActiveSection } from '../hooks/useActiveSection.js'
import '../styles/note-page.css'

const TOC = [
  ['s1', 'Apa itu Wormhole'],
  ['s2', 'Portal vs Legacy'],
  ['s3', 'Tutorial Portal Bridge'],
  ['s4', 'Legacy & Redeem Manual'],
  ['s5', 'Token Verifier'],
  ['s6', 'Wormholescan'],
  ['s7', 'Awas Governor'],
]

const SECTION_IDS = TOC.map(([id]) => id)

const AVATAR = '/notes/assets/arbitrage-uyar121/avatar.jpg'
const IMG = (name) => `/notes/assets/arbitrage-uyar121-wormhole/${name}`

export default function ArbitrageUyar121Wormhole() {
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
          <h1>Arbitrage From Zero #3</h1>
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
              Bedah <span>Wormhole</span>
            </h1>
            <div className="byline">
              <img className="avatar avatar-lg" src={AVATAR} alt="@Uyar121" />
              <span>
                oleh <strong>@Uyar121</strong>
              </span>
            </div>
            <p className="subtitle">
              #3: Lanjutan dari Arbitrage From Zero #1 & #2 - bedah tuntas bridge tool
              yang gak kalah powerful dan sering jadi ladang arbit: Wormhole.
            </p>
            <div className="disclaimer">
              ⚠ konten ini adalah rangkuman edukasi/strategi milik pembuat thread
              aslinya (@Uyar121). arbitrage &amp; bridging antar-chain tetap berisiko -
              bukan rekomendasi finansial.
            </div>
            <figure>
              <img src={IMG('img-01-cover.jpg')} alt="Arbitrage from Zero #3: Wormhole" />
            </figure>
          </div>

          <section className="chapter" id="s1">
            <div className="eyebrow">
              <span className="n">01</span> / Konsep Dasar
            </div>
            <h2>Apa itu Wormhole?</h2>
            <p>
              Singkatnya, Wormhole itu protokol komunikasi cross-chain. Dia memungkinkan
              transfer token dan data antar-chain yang bahkan beda arsitektur (EVM,
              Solana, IBC, SUI, dll). Buat arbitrage, Wormhole ini sweet spot banget -
              dari beberapa protokol yang di-support, filter yang paling sering dipakai
              adalah <strong>Portal Bridge</strong> dan <strong>Wormhole NTT</strong>.
            </p>
            <p>Fokus buat arbitrage ada 3:</p>
            <ol className="steps">
              <li>
                <strong>Portal Bridge</strong> (versi baru)
              </li>
              <li>
                <strong>Legacy Portal Bridge</strong> (versi lawas)
              </li>
              <li>
                <strong>Wormhole NTT</strong> (Native Token Transfer)
              </li>
            </ol>
          </section>

          <section className="chapter" id="s2">
            <div className="eyebrow">
              <span className="n">02</span> / Pilih yang Mana
            </div>
            <h2>Portal Bridge vs Legacy Portal Bridge</h2>
            <p>Wormhole punya dua versi interface utama untuk bridging:</p>
            <ul className="list">
              <li>
                <strong>Portal Bridge (versi baru)</strong> -{' '}
                <a href="https://portalbridge.com/" target="_blank" rel="noreferrer">
                  portalbridge.com
                </a>
                . UI utama yang sekarang, lebih stabil, smooth, dan mendukung mayoritas
                mainstream chains (Ethereum, Solana, Arbitrum, Optimism, Base, Sui,
                dll)
              </li>
              <li>
                <strong>Legacy Portal Bridge</strong> -{' '}
                <a href="https://legacy.portalbridge.com/" target="_blank" rel="noreferrer">
                  legacy.portalbridge.com
                </a>
                . Baru wajib dipakai kalau token yang mau di-bridge melibatkan chain
                yang belum di-support di Portal Bridge terbaru (seperti Algorand, Near,
                atau Acala) - contohnya token $SWEAT waktu mau bridge dari ETH ke NEAR
              </li>
            </ul>
          </section>

          <section className="chapter" id="s3">
            <div className="eyebrow">
              <span className="n">03</span> / Praktik
            </div>
            <h2>Tutorial Cepat Portal Bridge (Versi Baru)</h2>
            <ol className="steps">
              <li>Connect kedua wallet (source + destination)</li>
              <li>Pilih chain asal</li>
              <li>Paste contract address token di source</li>
              <li>Pilih chain tujuan → contract address di tujuan otomatis muncul</li>
              <li>Masukkan jumlah → pilih Cheapest (hemat fee) atau Fastest</li>
            </ol>

            <div className="callout stop">
              <span className="lbl">Catatan super penting sebelum eksekusi</span>
              Begitu contract address token di chain tujuan muncul, <strong>jangan
              asal gas!</strong> Klik CA tersebut untuk lari ke explorer, lalu cek ada
              aktivitas swap atau enggak - atau tes simulasi swap di DEX utama chain
              tersebut. Jangan sampai udah capek-capek bridge, pas mendarat malah gak
              ada liquidity alias zonk.
            </div>
            <p>
              <strong>Speed vs Fee:</strong> pilih "Cheapest" kalau mau hemat, tapi
              siap nunggu ~18 menit - kecuali buat chain super ngebut kayak
              HYPE/MONAD dan sejenisnya.
            </p>
            <figure>
              <img src={IMG('img-02-speed-vs-fee.png')} alt="Pilihan Fastest vs Cheapest di Portal Bridge" />
            </figure>
            <figure>
              <img src={IMG('img-03-portal-bridge-route.jpg')} alt="Estimasi waktu bridge dan pilihan network di Portal Bridge" />
            </figure>
          </section>

          <section className="chapter" id="s4">
            <div className="eyebrow">
              <span className="n">04</span> / Versi Lawas
            </div>
            <h2>Cara Pakai Legacy Portal Bridge &amp; Redeem Manual</h2>
            <p>
              Alurnya mirip: Connect → Pilih Chain → Masukkan CA → Next &amp;
              Konfirmasi. Tapi ada satu yang krusial: <strong>Redeem Token
              (manual)!</strong>
            </p>
            <div className="callout warn">
              Di akhir proses versi legacy, wajib klik redeem manual. Kalau tab-nya
              gak sengaja ke-close, wajib buka menu "Redeem" di platform untuk narik
              token. Jangan panik, tapi jangan sampai lupa!
            </div>
            <figure>
              <img src={IMG('img-04-legacy-portal-redeem.jpg')} alt="Tab Bridge dan Redeem di Legacy Portal Bridge" />
            </figure>
          </section>

          <section className="chapter" id="s5">
            <div className="eyebrow">
              <span className="n">05</span> / Senjata Rahasia #1
            </div>
            <h2>Token Verifier &amp; Attestation</h2>
            <ul className="list">
              <li>
                Masuk ke{' '}
                <a
                  href="https://legacy.portalbridge.com/#/token-origin-verifier"
                  target="_blank"
                  rel="noreferrer"
                >
                  Token Verifier
                </a>{' '}
                di Portal Bridge Legacy
              </li>
              <li>Paste CA source → pilih chain tujuan</li>
              <li>Kalau muncul = token sudah terdaftar (bisa di-bridge)</li>
              <li>Kalau tidak muncul = token belum ada di chain itu (belum di-attest)</li>
            </ul>
            <figure>
              <img src={IMG('img-05-token-verifier.jpg')} alt="Alur cek Token Origin Verifier di Portal Bridge" />
            </figure>
            <div className="rule-card">
              <span className="tag">Attestation</span>
              Sederhananya, ini adalah proses "pendaftaran" token baru agar bisa
              dikenali oleh ekosistem Wormhole di chain lain. Penting banget buat
              proyek-proyek baru yang mau go cross-chain.
            </div>
            <p>
              <strong>Tips tambahan:</strong> bisa cek siapa aja yang lagi
              nge-attestation token lewat Wormholescan. Masuk ke menu Transactions,
              lalu ubah bagian menu Transfers menjadi Attestation.
            </p>
            <figure>
              <img src={IMG('img-06-wormholescan-attestation.jpg')} alt="Filter Attestation di Wormholescan" />
            </figure>
          </section>

          <section className="chapter" id="s6">
            <div className="eyebrow">
              <span className="n">06</span> / Senjata Rahasia #2
            </div>
            <h2>Wormholescan - Kompas Berburu Arbit</h2>
            <p>
              Cara pakai{' '}
              <a href="https://wormholescan.io/" target="_blank" rel="noreferrer">
                wormholescan.io
              </a>{' '}
              buat screener:
            </p>
            <ul className="list">
              <li>
                <strong>Pantau Transactions &amp; Kompetitor</strong> - filter Protocol
                ke Portal &amp; Wormhole NTT, atur source/target chain incaran. Lihat
                berapa banyak saingan yang lagi nge-bridge token yang sama. Di dunia
                arbit, speed is everything - kalau saingan udah status Success,
                perhatikan harga/gap di chain tujuan masih ada atau enggak (price
                impact gede)
              </li>
              <li>
                <strong>Berburu di Menu Asset Secured</strong> - daftar token yang
                di-support Wormhole. Cek kategori NTT &amp; Others. Kalau token
                incaran gak ada, berarti dia pakai bridge lain
              </li>
            </ul>
            <figure>
              <img src={IMG('img-07-ntt-assets-overview.jpg')} alt="NTT Assets Overview di Wormholescan" />
            </figure>

            <div className="callout tip">
              <span className="lbl">Kasus unik: token SERV</span>
              Kadang di web cuma kelihatan 1 chain (misal ETH). Target seberangnya di
              mana? Copy CA-nya, bawa ke Token Verifier, lalu tebak masukin chain
              tujuannya satu-satu sampai ketemu jodohnya. Hacker mindset aktif!
            </div>
            <figure>
              <img src={IMG('img-08-serv-search.jpg')} alt="Pencarian token SERV di Wormholescan" />
            </figure>
            <figure>
              <img src={IMG('img-09-serv-bridge-result.jpg')} alt="Hasil bridge token SERV menjadi di chain Base" />
            </figure>
          </section>

          <section className="chapter" id="s7">
            <div className="eyebrow">
              <span className="n">07</span> / Manajemen Risiko
            </div>
            <h2 className="bear">Awas Menu "Governor"</h2>
            <div className="callout stop">
              Sebelum pencet bridge, wajib cek <strong>Queue Transaction</strong> di
              Wormholescan (menu Governor). Kalau token masuk antrean situ, artinya
              token itu udah kena <strong>Value Limit Bridge</strong> harian - dana
              bakal nyangkut dan baru akan rilis bertahap (paling lama 24 jam).
            </div>
            <p>
              Dulu pernah apes bridge $SWEAT dari NEAR ke ETH pas limitnya lagi penuh
              - dana ketahan berjam-jam. Jadi, stay safe dan selalu cek queue-nya.
            </p>
            <div className="callout tip">
              <span className="lbl">Catatan editor</span>
              Governor ini beda kategori sama DVN di Part #1 - DVN itu soal keamanan
              verifikasi pesan bridge, Governor soal limit nilai/rate harian. Padanan
              DVN yang lebih pas di Wormhole justru <strong>Token Verifier &amp;
              Attestation</strong> (section 05 di atas) - itu yang ngecek apakah token
              memang aman/terdaftar buat di-bridge. Governor tetap wajib dicek, tapi
              sebagai risiko tambahan yang berdiri sendiri, bukan pengganti Attestation.
            </div>

            <h3>Rangkuman: 3 Penyebab Dana Nyangkut</h3>
            <table className="journal">
              <tbody>
                <tr>
                  <th>Penyebab</th>
                  <th>Di Mana</th>
                  <th>Cara Cegah</th>
                </tr>
                <tr>
                  <td>DVN 1/1 (verifier lawas)</td>
                  <td>LayerZero / Stargate (Part #1)</td>
                  <td>Cek status DVN di LayerZeroScan sebelum bridge</td>
                </tr>
                <tr>
                  <td>Lupa klik Redeem manual</td>
                  <td>Legacy Portal Bridge (Part #3)</td>
                  <td>Selalu tunggu sampai proses redeem selesai, jangan close tab</td>
                </tr>
                <tr>
                  <td>Kena limit Governor</td>
                  <td>Wormhole (Part #3)</td>
                  <td>Cek Queue Transaction di Wormholescan sebelum eksekusi</td>
                </tr>
              </tbody>
            </table>
            <p>
              Tiga-tiganya beda penyebab, tapi gejalanya sama: dana ketahan. Jadi
              sebelum eksekusi bridge apa pun, checklist ini wajib dicek sesuai
              protokol yang dipakai.
            </p>
          </section>

          <footer>rangkuman thread @Uyar121 · dirapikan untuk arsip pribadi</footer>
        </main>
      </div>
    </div>
  )
}
