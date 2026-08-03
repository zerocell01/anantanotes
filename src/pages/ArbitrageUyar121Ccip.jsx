import { Link } from 'react-router-dom'
import { useActiveSection } from '../hooks/useActiveSection.js'
import '../styles/note-page.css'

const TOC = [
  ['s1', 'Kenapa CCIP Beda'],
  ['s2', 'Wajib Banyak Tools'],
  ['s3', 'Kasus SLX'],
  ['s4', 'Kasus FLUID'],
  ['s5', '3 Protokol CCIP'],
  ['s6', 'Cara Pakai Transporter'],
  ['s7', 'Hafalin Directory'],
  ['s8', 'Cek CA & Likuiditas'],
]

const SECTION_IDS = TOC.map(([id]) => id)

const AVATAR = '/notes/assets/arbitrage-uyar121/avatar.jpg'
const IMG = (name) => `/notes/assets/arbitrage-uyar121-ccip/${name}`

export default function ArbitrageUyar121Ccip() {
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
          <h1>Arbitrage From Zero #4</h1>
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
              Chainlink <span>CCIP</span>
            </h1>
            <div className="byline">
              <img className="avatar avatar-lg" src={AVATAR} alt="@Uyar121" />
              <span>
                oleh <strong>@Uyar121</strong>
              </span>
            </div>
            <p className="subtitle">
              #4: Lanjutan dari Arbitrage From Zero #1-#3 - bedah infrastruktur bridge
              paling "paranoid" soal keamanan: Chainlink CCIP, plus dua kasus nyata
              (blunder dan cuan) dari eksekusi langsung.
            </p>
            <div className="disclaimer">
              ⚠ konten ini adalah rangkuman edukasi/strategi milik pembuat thread
              aslinya (@Uyar121). arbitrage &amp; bridging antar-chain tetap berisiko -
              bukan rekomendasi finansial.
            </div>
            <figure>
              <img src={IMG('img-01-cover.jpg')} alt="Arbitrage from Zero #4: Chainlink CCIP" />
            </figure>
          </div>

          <section className="chapter" id="s1">
            <div className="eyebrow">
              <span className="n">01</span> / Konsep Dasar
            </div>
            <h2>Mengapa CCIP Beda dari LayerZero dan Wormhole?</h2>
            <p>
              Part #1 udah bedah kedigdayaan LayerZero, Part #3 kenalan sama
              fleksibilitas Wormhole. Dua-duanya bridge tools yang sering banget dipakai
              buat mondar-mandir antar-chain. Tapi kenapa perlu nambahin Chainlink CCIP
              ke whitelist persenjataan? Masalah utama di dunia cross-chain itu selalu
              soal keamanan - dan CCIP punya pendekatan yang agak "paranoid" (dalam
              artian positif) yang bikin dia beda kelas:
            </p>
            <ul className="list">
              <li>
                <strong>LayerZero (V1/V2)</strong> - mengandalkan kombinasi Endpoint,
                Oracle, dan Relayer (sekarang pakai DVN / Decentralized Verifier
                Networks). Keamanannya fleksibel, tapi sebagian besar konfigurasinya
                diserahin ke developer dApp masing-masing
              </li>
              <li>
                <strong>Wormhole</strong> - mengandalkan Guardian network, kumpulan 19
                validator top yang bertugas menandatangani setiap perpindahan status
                aset
              </li>
              <li>
                <strong>Chainlink CCIP</strong> - didukung infrastruktur oracle
                Chainlink yang udah teruji mengamankan puluhan miliar dolar di DeFi.
                Yang bikin CCIP gokil adalah adanya <strong>Risk Management
                Network</strong> - jaringan node independen sekunder yang tugasnya cuma
                melototin transaksi cross-chain secara real-time. Kalau mereka
                mendeteksi aktivitas aneh atau potensi exploit, jaringan otomatis
                nge-pause transaksi. Makanya institusi keuangan raksasa sekelas Swift
                aja milih pakai teknologi ini
              </li>
            </ul>
            <div className="callout tip">
              <span className="lbl">Info penting</span>
              Standar keamanan CCIP yang super ketat ini bukan sekadar gimik di atas
              kertas. Pasca-insiden keamanan Kelp DAO, beberapa protokol langsung
              mengambil langkah tegas memindahkan seluruh infrastruktur komunikasi dan
              tool bridge mereka ke Chainlink CCIP demi mengamankan dana user.
            </div>
          </section>

          <section className="chapter" id="s2">
            <div className="eyebrow">
              <span className="n">02</span> / Mindset
            </div>
            <h2>Kenapa Wajib Punya Banyak Tools Bridge (Termasuk CCIP)?</h2>
            <p>
              Sebagai retail arbitrage trader, jangan pernah fanatik cuma sama satu
              bridge. Di dunia on-chain, <strong>beda token itu bakal beda juga tools
              bridge-nya</strong> - gak ada satu infrastruktur yang bisa memonopoli
              semua aset di semua jaringan.
            </p>
            <p>
              Chainlink CCIP wajib banget dikuasai luar kepala karena intensitas
              pemakaiannya sering banget di market saat ini. Banyak token-token
              potensial baru yang memilih jalur CCIP sebagai jembatan utama mereka -
              kalau gak kuasai tool ini, bisa mati kutu dan kehilangan momentum pas
              nemu spread gurih yang jalurnya cuma disupport oleh CCIP.
            </p>
          </section>

          <section className="chapter" id="s3">
            <div className="eyebrow">
              <span className="n">03</span> / Kasus Riil #1
            </div>
            <h2 className="bear">Blunder &amp; Missed Opportunity di Token SLX (Solstice)</h2>
            <p>
              Saat baru launching, terjadi inefficiency market yang gokil banget antara
              jaringan BSC (BNB Chain) dan Solana. Spread harganya lumayan gede dan
              bertahan dalam window time yang cukup lama.
            </p>
            <div className="callout stop">
              Pikiran lagi gak jernih - muter-muter nyari jalur eksekusi dan malah gak
              nemu tools bridge-nya. Padahal token USX-nya Solstice udah nangkring di
              direktori token CCIP, harusnya otak langsung otomatis konek ke{' '}
              <strong>Transporter</strong> (aplikasi resmi berbasis CCIP). Karena
              ke-blank-an itu, arbitrage opportunity yang udah di depan mata menguap
              begitu aja - cuma bisa gigit jari nontonin selisih harga perlahan diratain
              sama orang lain (atau bot) yang otaknya lagi jernih dan siap dengan
              tools-nya.
            </div>
            <figure>
              <img src={IMG('img-03-transporter-slx.png')} alt="Setup bridge token SLX dari Solana ke BNB Chain di Transporter" />
              <figcaption>Transporter: bridge SLX dari Solana ke BNB Chain</figcaption>
            </figure>
          </section>

          <section className="chapter" id="s4">
            <div className="eyebrow">
              <span className="n">04</span> / Kasus Riil #2
            </div>
            <h2 className="bull">Ladang Makanan Harian di Token FLUID (Imbas Exploit Resolv)</h2>
            <p>
              Kebalikan dari kasus SLX, ini ladang cuan yang hampir tiap hari
              dirasain dan dieksekusi sendiri. Beberapa waktu lalu ada insiden exploit
              besar yang menimpa <strong>Resolv</strong>. Efek dominonya ke mana-mana,
              dan salah satu token yang ikut terdampak parah adalah <strong>FLUID</strong>
              - terjadi ketidakseimbangan likuiditas dan inefficiency pasar yang masif.
            </p>
            <p>
              Muncul gap harga token FLUID yang lumayan gede antara jaringan{' '}
              <strong>Plasma dan Solana</strong>. Karena ini efek dari insiden
              struktural, spread harganya gak langsung hilang dalam beberapa menit,
              melainkan terus-menerus muncul. Buat yang udah siap dengan tools
              cross-chain yang matang, celah ini bener-bener jadi ATM harian - tinggal
              beli di chain yang harganya hancur/murah, lempar lewat jalur aman, lalu
              jual di chain yang harganya lebih tinggi.
            </p>
            <figure>
              <img src={IMG('img-02-fluid-swap.jpg')} alt="Eksekusi swap FLUID memanfaatkan gap harga" />
            </figure>
            <div className="callout warn">
              Dua kasus di atas (SLX dan FLUID) membuktikan satu hal fatal: penting
              sekali punya banyak tools bridge, plus selalu jaga pikiran tetap tenang.
              Modal dan skill screening market bakal berakhir gak guna kalau pas
              momentumnya datang, malah nge-blank dan gak tahu "jalan tol" mana yang
              harus dilewatin.
            </div>
          </section>

          <section className="chapter" id="s5">
            <div className="eyebrow">
              <span className="n">05</span> / Toolkit
            </div>
            <h2>3 Protokol Andalan di Ekosistem CCIP</h2>
            <div className="rule-card">
              <span className="tag">
                <a href="https://app.interport.fi/bridge/1/42161/ETH/ETH" target="_blank" rel="noreferrer">
                  Interport
                </a>{' '}
                (Hybrid)
              </span>
              Cross-chain DEX aggregator pintar yang menggabungkan CCIP dengan teknologi
              lain untuk melakukan hybrid cross-chain swaps. Bagus banget kalau mau
              swap token A di chain X langsung jadi token B di chain Y dengan rute
              paling efisien.
            </div>
            <div className="rule-card">
              <span className="tag">
                <a href="https://xswap.link/bridge" target="_blank" rel="noreferrer">
                  XSwap
                </a>
              </span>
              Protokol cross-chain swap yang murni di-power oleh Chainlink CCIP. Sangat
              andal kalau butuh likuiditas antar-chain yang aman tanpa pusing mikirin
              risiko jembatannya.
            </div>
            <div className="rule-card">
              <span className="tag">
                <a href="https://app.transporter.io/?tab=token" target="_blank" rel="noreferrer">
                  Transporter
                </a>
              </span>
              Aplikasi bridge resmi (official app) besutan tim Chainlink, jadi kunci
              lolosnya token-token potensial. Kalau butuh mindahin modal bersih (kayak
              stablecoin atau token native) dengan tingkat keamanan maksimal,
              Transporter adalah jalur utamanya.
            </div>
          </section>

          <section className="chapter" id="s6">
            <div className="eyebrow">
              <span className="n">06</span> / Praktik
            </div>
            <h2>
              Cara Pakai{' '}
              <a href="https://transporter.io/" target="_blank" rel="noreferrer">
                Transporter.io
              </a>
            </h2>
            <p>Interface-nya super bersih dan gampang banget:</p>
            <ol className="steps">
              <li>Buka transporter.io (selalu double check URL-nya biar gak kena phishing)</li>
              <li>Konek wallet andalan (Rabby Wallet atau MetaMask)</li>
              <li>Set Source Chain (asal modal) dan Destination Chain (tempat spread harga berada)</li>
              <li>Pilih token dan masukkan nominal yang mau dikirim</li>
              <li>
                Pilih opsi fee - di CCIP bisa bayar pakai token native atau token{' '}
                <strong>LINK</strong> (biasanya bayar pakai LINK hitungannya bisa lebih
                murah/dapet potongan)
              </li>
              <li>
                Approve, klik Transfer, dan pantau prosesnya secara real-time via{' '}
                <strong>CCIP Explorer</strong>
              </li>
            </ol>
          </section>

          <section className="chapter" id="s7">
            <div className="eyebrow">
              <span className="n">07</span> / Strategi &amp; Tips
            </div>
            <h2>Hafalin CCIP Token Directory!</h2>
            <p>
              Jangan malas buat sering-sering mantau dan buka{' '}
              <a href="https://docs.chain.link/ccip/directory/mainnet" target="_blank" rel="noreferrer">
                CCIP Mainnet Directory
              </a>
              . Harus tahu, mantau, dan kalau bisa hapal di luar kepala token apa saja
              dan jaringan mana saja yang disupport secara resmi oleh CCIP.
            </p>
            <div className="callout tip">
              Di dunia arbitrage, waktu adalah uang. Pas lagi screening manual atau
              dapet alert ada spread, gak ada waktu buat mikir kelamaan atau buka
              Google dulu buat nyari tahu kecocokan jembatannya. Kalau udah hafal isi
              direktori CCIP, otak bakal langsung otomatis nge-klik: "Ini token
              disupport CCIP, jalurnya aman, langsung gas pakai Transporter!" -
              kecepatan mengambil keputusan inilah yang bikin selangkah lebih maju
              dari trader lain.
            </div>
            <figure>
              <img src={IMG('img-04-ccip-directory.jpg')} alt="CCIP Mainnet Directory - daftar chain dan token yang didukung" />
            </figure>
          </section>

          <section className="chapter" id="s8">
            <div className="eyebrow">
              <span className="n">08</span> / Wajib Baca
            </div>
            <h2 className="bear">Selalu Cek Contract Address (CA) &amp; Likuiditas di Tempat Tujuan!</h2>
            <p>
              Ini kesalahan pemula yang sering bikin amsyong. Jangan langsung asal gas
              bridge begitu lihat ada selisih harga gede di Dexscreener. Selalu cek
              dulu likuiditas di chain tujuan, atau masukin CA tokennya ke DEX setempat
              buat simulasi swap - jangan-jangan pas disimulasikan, price impact-nya
              malah minus gede atau ternyata likuiditasnya zonk.
            </p>
            <div className="callout stop">
              Beberapa kali nemu token yang keliatannya punya profit masif, tapi pas
              dicek beneran lewat simulasi swap, ternyata itu cuma wrapped token
              abal-abal yang CA-nya beda atau gak ada likuiditasnya sama sekali. Jadi,
              pastiin rute dan pool tujuan valid sebelum ketuk tombol kirim modal ke
              sana.
            </div>
            <figure>
              <img src={IMG('img-05-mew-listed-networks.jpg')} alt="Cek contract address token di berbagai network sebelum bridge" />
            </figure>
            <p>
              Arbitrage buat trader kecil itu bukan cuma soal siapa yang modalnya
              paling gede, tapi siapa yang paling pintar memanfaatkan celah pasar
              dengan tools yang paling aman, lengkap, dan presisi. Saat sudah menguasai
              LayerZero, Wormhole, dan Chainlink CCIP, bekal buat jadi arbitrader udah
              sangat cukup - karena rata-rata bridge token berkutat di 3 tools ini.
            </p>
          </section>

          <footer>rangkuman thread @Uyar121 · dirapikan untuk arsip pribadi</footer>
        </main>
      </div>
    </div>
  )
}
