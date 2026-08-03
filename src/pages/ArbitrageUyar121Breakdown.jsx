import { Link } from 'react-router-dom'
import { useActiveSection } from '../hooks/useActiveSection.js'
import '../styles/note-page.css'

const TOC = [
  ['s1', 'Awal Mula'],
  ['s2', 'Cek Chain'],
  ['s3', 'Bridge & Spread'],
  ['s4', 'Modal Mungil'],
  ['s5', 'Looping'],
  ['s6', 'Inget Hemi Chain'],
  ['s7', 'Eksekusi Hemi'],
  ['s8', 'Refuel & Final'],
  ['s9', 'Kesimpulan'],
]

const SECTION_IDS = TOC.map(([id]) => id)

const AVATAR = '/notes/assets/arbitrage-uyar121/avatar.jpg'
const IMG = (name) => `/notes/assets/arbitrage-uyar121-breakdown/${name}`

export default function ArbitrageUyar121Breakdown() {
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
          <h1>Arbitrage Breakdown</h1>
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
            <div className="ticker">studi kasus · rangkuman &amp; penjelasan</div>
            <h1 className="title">
              Dari Modal <span>Mungil</span>
            </h1>
            <div className="byline">
              <img className="avatar avatar-lg" src={AVATAR} alt="@Uyar121" />
              <span>
                oleh <strong>@Uyar121</strong>
              </span>
            </div>
            <p className="subtitle">
              Breakdown lengkap satu eksekusi arbitrage nyata: modal $80 jadi $118,
              lewat token msETH &amp; msUSD yang sempat depeg - dari riset chain
              sampai looping bridge berpuluh-puluh kali.
            </p>
            <div className="disclaimer">
              ⚠ konten ini adalah rangkuman edukasi/studi kasus milik pembuat thread
              aslinya (@Uyar121). arbitrage &amp; bridging antar-chain tetap berisiko -
              bukan rekomendasi finansial.
            </div>
            <div className="metric-row">
              <div className="metric">
                Modal Awal
                <br />
                <b>$80</b>
              </div>
              <div className="metric">
                Hasil Akhir
                <br />
                <b>$118</b>
              </div>
              <div className="metric">
                Profit
                <br />
                <b>+$30 (~24%)</b>
              </div>
            </div>
          </div>

          <section className="chapter" id="s1">
            <div className="eyebrow">
              <span className="n">01</span> / Trigger
            </div>
            <h2>Awal Mula</h2>
            <p>
              Awalnya dapet notif kalau token <strong>msUSD</strong> lagi depeg parah,
              minus sampai -11% dari harga peg-nya. Dari sini insting mulai jalan dan
              langsung dicek lebih dalam - ternyata selain msUSD, ada juga token{' '}
              <strong>msETH</strong> yang ikut kena imbas.
            </p>
            <figure>
              <img src={IMG('img-01-msusd-depeg-chart.jpg')} alt="Grafik harga msUSD depeg turun sampai $0.88" />
              <figcaption>msUSD depeg, sempat nyentuh ~$0.88</figcaption>
            </figure>
          </section>

          <section className="chapter" id="s2">
            <div className="eyebrow">
              <span className="n">02</span> / Riset
            </div>
            <h2>Cek Chain</h2>
            <p>
              Langsung cek Coingecko buat lihat posisinya. Token msUSD dan msETH ini
              nangkring di 4 chain: <strong>ETH, OP, Base, dan Plasma</strong>.
            </p>
            <figure>
              <img src={IMG('img-02-msusd-chains.png')} alt="msUSD terdaftar di chain Plasma, Base, dan Optimism di Coingecko" />
            </figure>
          </section>

          <section className="chapter" id="s3">
            <div className="eyebrow">
              <span className="n">03</span> / Riset
            </div>
            <h2>Bridge &amp; Cek Spread</h2>
            <p>
              Setelah cek tools bridge-nya, jalurnya ternyata bisa lewat{' '}
              <strong>LayerZero via Stargate</strong>. Dari sini ketahuan msETH dan
              msUSD juga ada di chain lain, yakni <strong>Hemi Chain</strong> - tapi
              awalnya diacuhin dulu.
            </p>
            <figure>
              <img src={IMG('img-03-museth-search.png')} alt="Pencarian msETH menampilkan token di Plasma, Ethereum, OP Mainnet, Base, dan Hemi" />
            </figure>
            <div className="callout warn">
              Pas cek harga, ketemu gap antara Base dan Plasma. Tapi spread-nya udah
              gak terlalu gede karena pas dapet info ini, udah 2 jam berlalu - arbiter
              kakap udah nyikat duluan, nyisain remahan spread yang mungkin udah gak
              "seksi" lagi di mata mereka.
            </div>
          </section>

          <section className="chapter" id="s4">
            <div className="eyebrow">
              <span className="n">04</span> / Eksekusi
            </div>
            <h2>Modal Mungil, Effort Gede</h2>
            <p>
              Diputuskan buat tetap hajar arbit dari Base ke Plasma dan sebaliknya
              (kadang main di msUSD, kadang di msETH). Karena modal cuma{' '}
              <strong>$80</strong>, spread yang harusnya bisa dihabisin 1-2x
              transaksi bolak-balik, terpaksa harus dibabat berpuluh-puluh kali.
            </p>
            <div className="callout tip">
              Ya namanya juga modal mungil, harus siap effort extra.
            </div>
          </section>

          <section className="chapter" id="s5">
            <div className="eyebrow">
              <span className="n">05</span> / Eksekusi
            </div>
            <h2>Looping Terus Sampai Kering</h2>
            <p>Rute muternya gini:</p>
            <ol className="steps">
              <li>Buy msUSD/msETH di Base</li>
              <li>Bridge pakai LayerZero ke Plasma</li>
              <li>Swap ke WETH</li>
              <li>Bridge balik ke Base</li>
            </ol>
            <figure>
              <img src={IMG('img-04-loop-swaps.png')} alt="Riwayat transaksi loop swap msUSD ke WETH bolak-balik" />
            </figure>
            <p>
              Ini dilakuin berulang kali sampai akhirnya spread-nya mulai abis dan
              kering kerontang antara Base dan Plasma (chain ETH dan OP juga).
            </p>
          </section>

          <section className="chapter" id="s6">
            <div className="eyebrow">
              <span className="n">06</span> / Plot Twist
            </div>
            <h2>Baru Inget: Hemi Chain</h2>
            <p>
              Harusnya arbitnya udah kelar - tapi di sini baru inget masih ada satu
              chain lagi, yakni <strong>Hemi Chain</strong>. Cek CA di LayerZeroScan,
              track tx bridge-nya, ternyata bridge dari ETH ke Hemi Chain.
            </p>
            <figure>
              <img src={IMG('img-05-hemi-chain-list.png')} alt="Daftar contract address msETH/msUSD di Base, Ethereum, Optimism, Plasma, dan Hemi" />
            </figure>
          </section>

          <section className="chapter" id="s7">
            <div className="eyebrow">
              <span className="n">07</span> / Eksekusi
            </div>
            <h2>Eksekusi Hemi Chain</h2>
            <p>
              Langsung ditelusuri DEX-nya, dan ketemu liquidity-nya ada di{' '}
              <strong>Sushiswap</strong>. Yang ada cuma msETH, sedangkan msUSD udah gak
              ada (atau udah habis disikat yang lain).
            </p>
            <div className="rule-card">
              <span className="tag">Hitung-hitungan</span>
              Max amount buat swap cuma <strong>0.03 msETH → 0.0296 ETH ($55)</strong>.
              Buat beli 0.03 msETH, cuma perlu 0.024 ETH ($45 di chain ETH). Artinya
              ada profit $10. Setelah cek fee bridge (kena $2), masih ada profit -
              lanjut.
            </div>
          </section>

          <section className="chapter" id="s8">
            <div className="eyebrow">
              <span className="n">08</span> / Eksekusi
            </div>
            <h2>Refuel &amp; Final Execution</h2>
            <p>
              Gak pakai lama, isi gas fee ETH di Hemi dulu pakai <strong>Relay</strong>.
              Habis itu, langsung eksekusi final route-nya:
            </p>
            <ol className="steps">
              <li>Beli di ETH (swap 0.024 ETH dapet 0.03 msETH)</li>
              <li>Bridge ke Hemi Chain dengan Stargate</li>
              <li>Swap di Sushiswap (Hemi) dan kembali jadi 0.03 ETH</li>
              <li>Bridge balik profitnya ke Base pakai Relay</li>
            </ol>
            <figure>
              <img src={IMG('img-06-hemi-execution.png')} alt="Eksekusi swap 0.024 ETH ke msETH lalu swap balik ke ETH di Sushiswap Hemi" />
            </figure>
            <div className="callout tip">Selesai. Bersih, cepat, cuan!</div>
          </section>

          <section className="chapter" id="s9">
            <div className="eyebrow">
              <span className="n">09</span> / Penutup
            </div>
            <h2>Kesimpulan</h2>
            <p>
              Kalau modal lagi kecil, jangan males nge-klik dan riset lebih dalam.
              Kadang data agregator kayak Coingecko gak ngasih full info, makanya
              perlu ngulik on-chain juga atau pakai tools lain - dalam kasus ini,{' '}
              LayerZeroScan.
            </p>
          </section>

          <footer>rangkuman thread @Uyar121 · dirapikan untuk arsip pribadi</footer>
        </main>
      </div>
    </div>
  )
}
