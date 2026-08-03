import { Link } from 'react-router-dom'
import '../styles/note-page.css'

const TOC = [
  ['s1', 'Kenapa Arbitrage'],
  ['s2', 'Arbitrage vs Trading'],
  ['s3', 'Apa itu Cross-Chain'],
  ['s4', 'Cara Pakai Stargate'],
  ['s5', 'Hunting via LayerZeroScan'],
  ['s6', 'Nemu Gap Harga'],
  ['s7', 'Catatan Penting DVN'],
  ['s8', 'Risiko & Tips Pemula'],
]

const IMG = (name) => `/notes/assets/arbitrage-uyar121/${name}`

export default function ArbitrageUyar121() {
  return (
    <div className="note-page">
      <div className="grid-bg" />
      <div className="layout">
        <aside>
          <Link className="back-link" to="/">
            ← Ananta Notes
          </Link>
          <div className="author-row">
            <img className="avatar" src={IMG('avatar.jpg')} alt="@Uyar121" />
            <div className="brand">
              Thread archive · <strong>@Uyar121</strong>
            </div>
          </div>
          <h1>Arbitrage From Zero #1</h1>
          <nav className="toc">
            {TOC.map(([id, label], i) => (
              <a key={id} href={`#${id}`}>
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
              Arbitrage <span>From Zero</span>
            </h1>
            <div className="byline">
              <img className="avatar avatar-lg" src={IMG('avatar.jpg')} alt="@Uyar121" />
              <span>
                oleh <strong>@Uyar121</strong>
              </span>
            </div>
            <p className="subtitle">
              #1: Menguasai LayerZero dan Stargate — perjalanan belajar cross-chain
              arbitrage dari modal $20 sampai tumbuh 50x lipat, murni dari trial-error
              sendiri.
            </p>
            <div className="disclaimer">
              ⚠ konten ini adalah rangkuman edukasi/strategi milik pembuat thread
              aslinya (@Uyar121). arbitrage &amp; bridging antar-chain tetap berisiko —
              termasuk potensi dana nyangkut (stuck in flight) — bukan rekomendasi
              finansial.
            </div>
          </div>

          <section className="chapter" id="s1">
            <div className="eyebrow">
              <span className="n">01</span> / Latar Belakang
            </div>
            <h2>Kenapa Gua Milih Jadi Cross-Chain Arbitrader?</h2>
            <p>
              Sebelum nyemplung ke sini, gua udah nyobain hampir semua jalan ninja di
              kripto: trading modal chart (TA), jadi liquidity provider di Meteora,
              nge-degen meme coin, sampai main futures modal leverage tinggi. Hasilnya?
              Selalu rugi dan berujung boncos.
            </p>
            <p>
              Akhirnya mutusin buat putar haluan: belajar <strong>cross-chain
              arbitrage</strong> bener-bener dari nol, gak pake mentor, cuma modal nekat
              dan trial-error. Maret 2026 mulai lagi dengan modal receh <strong>$20</strong>{' '}
              — per Mei 2026 portfolio udah tembus <strong>$1.100+</strong>, tumbuh 50x
              lipat dalam kurang dari 3 bulan.
            </p>
            <figure>
              <img src={IMG('img-01-portfolio-growth.jpg')} alt="Grafik pertumbuhan portfolio dari $21 ke $1.136" />
              <figcaption>Net worth change: 1 Mar 2026 ($21) → 18 Mei 2026 ($1.136)</figcaption>
            </figure>
            <ul className="list">
              <li>
                <strong>Modal receh ramah kantong</strong> — bisa dimulai bahkan dengan
                modal seadanya
              </li>
              <li>
                <strong>Pace-nya slow tapi sustainable</strong> — gak perlu jantungan
                mantengin chart tiap detik
              </li>
              <li>
                <strong>Efek bola salju</strong> — makin besar modal/portfolio, makin
                gampang nemuin profit yang kerasa
              </li>
            </ul>
          </section>

          <section className="chapter" id="s2">
            <div className="eyebrow">
              <span className="n">02</span> / Mindset
            </div>
            <h2>Bedanya Arbitrage vs Trading Lain</h2>
            <p>
              Kuncinya di disiplin tinggi dan rajin compounding (gulung profit).
              Pace-nya emang kelihatan pelan, tapi makin gede modal, makin berasa
              gurihnya.
            </p>
            <div className="pill-grid">
              <div className="pill">Gap harga 1% · modal $100 → profit $1</div>
              <div className="pill">Gap harga 1% · modal $1.000 → profit $10</div>
            </div>
            <p>
              Walaupun kelihatan lambat, strategi ini jauh lebih sustainable dibanding
              trading biasa — karena <strong>90% portfolio selalu dalam
              stablecoin</strong>. Market ijo royo-royo, orang FOMO kejar pump, tetap
              santai. Market merah darah, orang panik jual rugi, tetap chill.
            </p>
            <div className="callout tip">
              Gak ada drama naik-turun yang bikin deg-degan. Jiwa tenang, pikiran
              jernih, tidur pun nyenyak setiap malam — bukan cuma cari cuan, tapi juga
              ketenangan mental.
            </div>
          </section>

          <section className="chapter" id="s3">
            <div className="eyebrow">
              <span className="n">03</span> / Konsep Dasar
            </div>
            <h2>Apa itu Cross-Chain Arbitrage?</h2>
            <p>
              Sederhananya: memanfaatkan perbedaan harga untuk token yang sama di dua
              jaringan (chain) yang berbeda. Beli di chain yang murah, bridge (pindahin)
              ke chain yang mahal, lalu jual di sana buat ambil selisih untungnya.
            </p>
            <p>Ada dua tools yang wajib dikuasai buat memulai:</p>
            <ul className="list">
              <li>
                <strong>LayerZero</strong> — protokol yang menghubungkan 80+ jaringan
                blockchain
              </li>
              <li>
                <strong>Stargate Finance</strong> — aplikasi paling gampang dan
                user-friendly buat pakai teknologi LayerZero ini
              </li>
            </ul>
          </section>

          <section className="chapter" id="s4">
            <div className="eyebrow">
              <span className="n">04</span> / Praktik
            </div>
            <h2>Cara Pakenya (Step-by-Step Stargate)</h2>
            <ol className="steps">
              <li>
                Buka <strong>stargate.finance</strong>
              </li>
              <li>Konek wallet (Rabby atau MetaMask)</li>
              <li>Pilih Source Chain (asal) → Destination Chain (tujuan)</li>
              <li>Pilih tokennya (utamakan yang udah support OFT)</li>
              <li>Masukin jumlah token → cek estimasi fee (biaya gas)</li>
              <li>Approve → tinggal Bridge!</li>
            </ol>
          </section>

          <section className="chapter" id="s5">
            <div className="eyebrow">
              <span className="n">05</span> / Riset
            </div>
            <h2>Cara Hunting Token Potensial Pakai LayerZeroScan</h2>
            <p>
              Banyak orang mikir LayerZeroScan cuma buat ngecek transaksi sukses atau
              kagak. Padahal, ini adalah tools rahasia yang sangat powerful buat nyari
              celah arbitrage.
            </p>

            <h3>1. Menu "Messages" + Kolom Search</h3>
            <p>
              Di sini bisa mantau transaksi orang lain secara real-time, filter dari
              jaringan asal ke tujuan. Di kolom Search, tinggal masukin Tx Hash, alamat
              wallet, atau ketik langsung ticker tokennya (misal: "RAVE"). Kalau
              muncul, berarti token itu udah support OFT.
            </p>
            <figure>
              <img src={IMG('img-02-rave-search.jpg')} alt="Pencarian token RAVE di LayerZeroScan" />
              <figcaption>Contoh: token RAVE ada di 3 jaringan sekaligus — Ethereum, Base, dan BSC</figcaption>
            </figure>

            <h3>2. Menu "Ecosystem" → Application vs OFT</h3>
            <ul className="list">
              <li>
                <strong>Application</strong> — biasanya bridge resmi bawaan projeknya.
                Satu Application bisa punya lebih dari satu OFT yang bisa dibridge
              </li>
              <li>
                <strong>OFT (Omnichain Fungible Token)</strong> — teknologi yang bikin
                sebuah token bisa pindah antar-jaringan dengan mulus
              </li>
            </ul>
            <figure>
              <img src={IMG('img-03-oft-list.jpg')} alt="Daftar semua OFT di LayerZeroScan" />
            </figure>
            <figure>
              <img src={IMG('img-04-morpheus-oft.jpg')} alt="Detail OFT Morpheus (MOR)" />
            </figure>
          </section>

          <section className="chapter" id="s6">
            <div className="eyebrow">
              <span className="n">06</span> / Strategi
            </div>
            <h2>Gimana Cara Nemu Token yang Lagi Ada Gap Harga?</h2>
            <p>Biasanya gap harga terjadi karena beberapa pemicu:</p>
            <ul className="list">
              <li>Token baru listing CEX</li>
              <li>Token volatile — lagi ada pump atau dump parah di salah satu jaringan</li>
              <li>Pasca hack/exploit — kondisi panik biasanya bikin harga timpang</li>
              <li>Token dormant ("mati") — udah jarang ditransaksikan tapi masih ada likuiditasnya</li>
            </ul>
            <div className="rule-card">
              <span className="tag">Tips Praktis Hunting</span>
              Buka LayerZeroScan → masuk ke Ecosystem → pilih OFT → urutkan berdasarkan
              Volume Transferred (All Time) dari yang paling kecil.
            </div>
            <figure>
              <img src={IMG('img-05-oft-sorted.jpg')} alt="Daftar OFT diurutkan dari volume transfer terkecil" />
            </figure>
          </section>

          <section className="chapter" id="s7">
            <div className="eyebrow">
              <span className="n">07</span> / Wajib Baca
            </div>
            <h2 className="bear">Catatan Penting Sebelum Bridge</h2>
            <p>
              Harus tahu apa itu <strong>DVN (Decentralized Verifier Network)</strong> —
              jaringan yang bertugas memverifikasi pesan bridge di LayerZero.
            </p>
            <div className="callout stop">
              Semenjak ada kasus exploit rsETH KelpDAO, token yang masih pake{' '}
              <strong>DVN 1/1</strong> udah gak bakal diproses lagi. Makin banyak
              DVN-nya (misal 2/2 atau 3/3), transaksinya makin aman. Project aktif
              biasanya udah upgrade ke DVN baru — tapi token dormant biasanya gak
              di-upgrade sama developernya. Maksa bridge token mati ini bisa bikin
              transaksi nyangkut selamanya (Stuck In Flight).
            </div>
            <figure>
              <img src={IMG('img-06-stuck-inflight.jpg')} alt="Transaksi stuck In Flight pada token dengan DVN 1/1" />
              <figcaption>Transaksi nyangkut pada token dengan DVN 1/1</figcaption>
            </figure>

            <h3>SOP Wajib Sebelum Klik Bridge</h3>
            <ul className="list">
              <li>Selalu tes bridge pake nominal kecil dulu (tes ombak)</li>
              <li>Hitung matang-matang total biaya gas (fee)</li>
              <li>
                Cek "Time Taken" di LayerZeroScan — kalau estimasi waktu udah lewat
                tapi statusnya masih In Flight, fix itu nyangkut
              </li>
            </ul>
          </section>

          <section className="chapter" id="s8">
            <div className="eyebrow">
              <span className="n">08</span> / Penutup
            </div>
            <h2>Risiko &amp; Tips Pemula</h2>
            <p>Gak ada yang instan dan bebas risiko di dunia kripto. Harus paham:</p>
            <ul className="list">
              <li>Cek teliti input dan output harga — lebih disaranin pakai DEX yang ada mode "simulate"</li>
              <li>Likuiditas token sering kali tipis (terutama token dormant)</li>
              <li>
                <strong>Jangan pernah all-in.</strong>
              </li>
            </ul>
            <div className="callout tip">
              Tips buat yang baru mau mulai: mulai dari modal kecil (kayak $20), rajin
              gulung profitnya (compounding), dan yang terpenting: sabar. Ini permainan
              maraton, bukan lari sprint. Gak ada hype berlebihan — real process, slow
              but sustainable.
            </div>
          </section>

          <footer>rangkuman thread @Uyar121 · dirapikan untuk arsip pribadi</footer>
        </main>
      </div>
    </div>
  )
}
