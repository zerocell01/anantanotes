import { Link } from 'react-router-dom'
import { useActiveSection } from '../hooks/useActiveSection.js'
import '../styles/note-page.css'

const TOC = [
  ['s1', 'Coingecko'],
  ['s2', 'Kriteria Wajib'],
  ['s3', 'Explorer & Bridge'],
  ['s4', 'Defillama'],
  ['s5', 'Pemilihan CEX'],
  ['s6', 'DEX Aggregator'],
]

const SECTION_IDS = TOC.map(([id]) => id)

const AVATAR = '/notes/assets/arbitrage-uyar121/avatar.jpg'
const IMG = (name) => `/notes/assets/arbitrage-uyar121-screening/${name}`

export default function ArbitrageUyar121Screening() {
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
          <h1>Arbitrage From Zero #2</h1>
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
              Screening <span>Mastery</span>
            </h1>
            <div className="byline">
              <img className="avatar avatar-lg" src={AVATAR} alt="@Uyar121" />
              <span>
                oleh <strong>@Uyar121</strong>
              </span>
            </div>
            <p className="subtitle">
              #2: Lanjutan dari Arbitrage From Zero #1 - workflow lengkap cara screening
              arbitrage opportunity, dari nyari token volatile sampai milih DEX
              aggregator buat eksekusi.
            </p>
            <div className="disclaimer">
              ⚠ konten ini adalah rangkuman edukasi/strategi milik pembuat thread
              aslinya (@Uyar121). arbitrage &amp; bridging antar-chain tetap berisiko -
              bukan rekomendasi finansial.
            </div>
            <figure>
              <img src={IMG('img-01-cover.jpg')} alt="Arbitrage from Zero #2: Screening Mastery" />
            </figure>
          </div>

          <section className="chapter" id="s1">
            <div className="eyebrow">
              <span className="n">01</span> / Screening Awal
            </div>
            <h2>Coingecko</h2>
            <p>
              Pelajaran dasar dari Arbitrage From Zero #1: <strong>gap harga tercipta
              karena adanya volatilitas</strong> (pump/dump parah). Langkah di
              Coingecko:
            </p>
            <ul className="list">
              <li>
                <strong>Pantau Top Gainer &amp; Top Loser</strong> - cek token apa aja
                yang lagi ditarik naik atau dibanting turun. Setting filter 24
                hours/1 hours, Top 1000 atau All Coins
              </li>
              <li>
                <strong>Filter Persentase Change</strong> - masuk ke menu Cryptocurrency
                &gt; All Coins. Filter token dengan kenaikan/penurunan: +50%, 10% s.d
                50%, atau -50%, dan -10% s.d -50%
              </li>
            </ul>
            <figure>
              <img src={IMG('img-02-coingecko-gainers-losers.jpg')} alt="Top Crypto Gainers and Losers di Coingecko" />
            </figure>
          </section>

          <section className="chapter" id="s2">
            <div className="eyebrow">
              <span className="n">02</span> / Filter Wajib
            </div>
            <h2>Ketemu Token Volatile? Jangan Langsung FOMO</h2>
            <p>Cek dulu kriteria wajib ini sebelum eksekusi:</p>
            <ol className="steps">
              <li>
                <strong>Multi-market/Multi-chain</strong> - token harus ada di minimal 2
                tempat berbeda (misal: ada di Base dan Solana, atau ada di DEX dan CEX
                seperti Gate.io atau KuCoin)
              </li>
              <li>
                <strong>Cek Selisih Harga</strong> - bandingkan input &amp; output di
                kedua pasar. Modal $100 di DEX Base dapet berapa, kalau di-swap di DEX
                Solana dapet berapa. Ada selisih yang nutup modal? Lanjut
              </li>
              <li>
                <strong>Cek Tool Bridge &amp; Estimasi</strong> - cari jembatan buat
                mindahin tokennya, tes rutenya, cek gas fee, platform fee, dan berapa
                lama waktu pengirimannya
              </li>
              <li>
                <strong>(Optional tapi penting) Intip Tx orang lain</strong> - cek
                explorer bridge (misal LayerZeroScan). Kalau transaksi orang lain sukses
                dan gap harganya masih awet, baru ikut eksekusi
              </li>
            </ol>
            <div className="callout tip">
              <span className="lbl">Kenapa harus cek Tx orang lain?</span>
              Seringkali gap harga terlihat besar karena jembatan/bridge-nya lagi
              berstatus "paused/in flight" (dihentikan sementara/tertahan lama) atau
              likuiditas di chain tujuan habis. Mengintip Tx orang lain memastikan
              jalurnya memang aman dan lancar.
            </div>
          </section>

          <section className="chapter" id="s3">
            <div className="eyebrow">
              <span className="n">03</span> / Riset
            </div>
            <h2>Memanfaatkan Explorer &amp; Scanning Bridge</h2>
            <p>
              Daripada nyari dari nol di Coingecko, cara kedua adalah "membuntuti" orang
              yang lagi nge-bridge dalam jumlah besar. Ada 3 tools yang dipakai:
            </p>
            <ul className="list">
              <li>
                <strong>LayerZeroScan &amp; Wormholescan</strong> - mantau transaksi
                yang lagi jalan dari chain asal ke chain tujuan. Kalau nemu token yang
                asing tapi sering di-bridge, langsung cek input-output DEX di kedua
                chain tersebut
              </li>
              <li>
                <strong>Range Explorer (The Ultimate Tool)</strong> - salah satu tool
                paling powerful, bisa filter berdasarkan protokol kayak LayerZero,
                Wormhole, IBC, Axelar, Debridge, hingga Snowbridge-nya ekosistem
                Polkadot. Bisa juga filter berdasarkan Asset - tinggal masukin ticker
                atau contract address token yang diincar, semua history transaksi
                bridge orang lain pakai token itu langsung muncul
              </li>
            </ul>
            <figure>
              <img src={IMG('img-03-range-explorer.jpg')} alt="Range Explorer dengan filter protokol bridge" />
            </figure>
            <div className="callout warn">
              <span className="lbl">Catatan editor</span>
              Cek <strong>DVN</strong> di Part #1 itu spesifik buat bridge lewat{' '}
              <strong>LayerZero/Stargate</strong>. Kalau lewat Range Explorer nemu
              rute di <strong>Wormhole</strong> (guardian network), <strong>Axelar</strong>{' '}
              (validator set), atau protokol lain, mereka punya mekanisme verifikasi
              sendiri yang beda dan belum dibahas di sini - jangan asumsikan "udah
              dicek DVN-nya aman" berlaku untuk semua bridge. Riset dulu status
              keamanan protokolnya masing-masing sebelum eksekusi.
            </div>
          </section>

          <section className="chapter" id="s4">
            <div className="eyebrow">
              <span className="n">04</span> / Chain Asing
            </div>
            <h2>Defillama</h2>
            <p>
              Gimana kalau dapet info token volatile di chain yang gak familiar?
              Kasusnya kayak $LYX kemarin - DEX-nya di Ethereum diketahui, tapi buta
              sama DEX di LUKSO Mainnet. Solusinya ke Defillama:
            </p>
            <ol className="steps">
              <li>Masuk menu Chains, filter jaringan yang dicari (misal: LUKSO)</li>
              <li>Di situ bakal muncul daftar DEX dengan TVL (Total Value Locked) tertinggi</li>
              <li>Buka DEX-nya, cek lagi simulasi input dan output harganya</li>
            </ol>
            <div className="callout warn">
              <span className="lbl">Kenapa pilih TVL teratas?</span>
              Biar gak kena "Slippage" (potongan harga akibat kurangnya likuiditas).
              Percuma gap harga 20%, tapi pas swap modal gede, harganya malah boncos
              karena DEX-nya sepi likuiditas.
            </div>
            <figure>
              <img src={IMG('img-04-defillama-rhea.jpg')} alt="Protocol rankings Rhea Finance di Defillama" />
              <figcaption>Rhea - DEX di NEAR</figcaption>
            </figure>
          </section>

          <section className="chapter" id="s5">
            <div className="eyebrow">
              <span className="n">05</span> / Eksekusi CEX
            </div>
            <h2>Pemilihan CEX: Jangan Cuma Asal Nyari yang Listing!</h2>
            <p>
              Gate.io sering dipakai buat nyari token-token arbit karena rajin banget
              listing token micin sampai token baru (kayak $LYX dan $LINGO kemarin) -
              ladang nemu gap harganya subur banget di sana.
            </p>
            <div className="callout stop">
              <span className="lbl">Tapi ada tapinya</span>
              Jangan cuma lihat tokennya ada di CEX mana, perhatikan juga{' '}
              <strong>Kedalaman Orderbook (Bid/Ask)</strong>. Kalau orderbook tipis, pas
              dihantam modal gede buat arbit, harganya bakal langsung kegeser dan bikin
              cuan berkurang/malah rugi.
            </div>
            <p>
              <strong>Kasus nyata ($LYX):</strong> meskipun $LYX ada di Gate.io,
              eksekusi lebih difokuskan ke <strong>KuCoin</strong> - karena antrean
              Bid/Ask di KuCoin jauh lebih tebal dibanding Gate.io.
            </p>
          </section>

          <section className="chapter" id="s6">
            <div className="eyebrow">
              <span className="n">06</span> / Senjata Eksekusi
            </div>
            <h2>Memilih DEX Aggregator yang Tepat</h2>
            <p>
              DEX Aggregator wajib dipakai karena otomatis nyariin rute swap paling
              murah dan efisien dibanding swap manual di satu DEX biasa. Kombinasi 3
              tools ini, masing-masing dengan tugas spesifik:
            </p>

            <div className="rule-card">
              <span className="tag">Defillama Meta DEX Aggregator</span>
              <strong>Kelebihan:</strong> loading-nya gesit banget saat eksekusi -
              kecepatan adalah kunci di dunia arbit sebelum gap-nya ditutup orang
              lain/bot. <strong>Kelemahan:</strong> kadang rute awal yang belum
              dicentang verified suka bikin transaksi revert (gagal).
            </div>
            <figure>
              <img src={IMG('img-05-llamaswap.jpg')} alt="LlamaSwap interface" />
              <figcaption>LlamaSwap</figcaption>
            </figure>

            <div className="rule-card">
              <span className="tag">Jumper (.exchange)</span>
              <strong>Kelebihan:</strong> paling lengkap, chain-nya banyak, dan bagus
              buat naikin volume transaksi (bisa sekalian nyari reward/airdrop) -
              biasa dipakai buat geser-geser stablecoin. <strong>Kelemahan:</strong> di
              beberapa device, loading-nya kadang agak lambat.
            </div>
            <figure>
              <img src={IMG('img-06-jumper.jpg')} alt="Jumper swap interface" />
              <figcaption>Jumper</figcaption>
            </figure>

            <div className="rule-card">
              <span className="tag">Oku Trade (Andalan buat Simulasi)</span>
              Dipakai khusus buat <strong>Pre-Simulation Outcome</strong> (ngecek
              transaksi ini bakal sukses atau zonk). Contoh: swap 100 USDC ke Token A -
              di Defillama &amp; Jumper hasilnya kelihatan manis (dapet 1000 Token A),
              tapi pas dicek di Oku hasilnya cuma 900 Token A dan ada peringatan "DEX
              lain reverted". Kalau nekat eksekusi di Defillama/Jumper, transaksi
              kemungkinan besar bakal gagal dan buang-buang gas fee. Di Oku, transaksinya
              bakal disaring biar sukses. <strong>Kelemahan:</strong> loading untuk
              approve dan eksekusi transaksinya masih kalah cepat dibanding Defillama
              Aggregator.
            </div>
            <figure>
              <img src={IMG('img-07-oku-trade.jpg')} alt="Oku Trade swap dan routes" />
              <figcaption>Oku Trade</figcaption>
            </figure>

            <div className="callout tip">
              Semua screening ini masih dilakukan 100% secara manual - belum pake AI
              Agent atau Bot karena masih tahap belajar. Tapi terbukti, cara manual pun
              masih sangat bisa menghasilkan asal rajin dan jeli.
            </div>
          </section>

          <footer>rangkuman thread @Uyar121 · dirapikan untuk arsip pribadi</footer>
        </main>
      </div>
    </div>
  )
}
