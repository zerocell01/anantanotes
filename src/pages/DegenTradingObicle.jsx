import { Link } from 'react-router-dom'
import { useActiveSection } from '../hooks/useActiveSection.js'
import '../styles/note-page.css'

const TOC = [
  ['s1', 'Trade Terminal'],
  ['s2', 'Market Structure'],
  ['s3', 'Gameplay'],
  ['s4', 'Strat Lanjutan'],
  ['s5', 'Risk & Money Mgmt'],
  ['s6', 'Trading Journal'],
  ['s7', 'Manajemen Emosi'],
  ['s8', 'Insight'],
  ['s9', 'Anti-Roundtrip'],
  ['s10', 'Trade Breakdown'],
  ['s11', 'Review Mingguan'],
]

const SECTION_IDS = TOC.map(([id]) => id)

const CANDLE_HEIGHTS = [30, 42, 38, 55, 50, 68, 60, 80, 72, 95, 86, 108]

const IMG = (name) => `/notes/assets/degen-trading-obicle/${name}`

function Signature() {
  return (
    <div className="signature" id="signature">
      {CANDLE_HEIGHTS.map((h, i) => {
        const down = i > 0 && h < CANDLE_HEIGHTS[i - 1]
        return (
          <div
            key={i}
            className={'candle' + (down ? ' down' : '')}
            style={{ height: `${h}px` }}
          />
        )
      })}
    </div>
  )
}

export default function DegenTradingObicle() {
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <div className="note-page">
      <div className="grid-bg" />
      <div className="layout">
        <aside>
          <Link className="back-link" to="/">
            ← Ananta Notes
          </Link>
          <div className="author-row">
            <img className="avatar" src={IMG('avatar.jpg')} alt="@obicle" />
            <div className="brand">
              Thread archive · <strong>@obicle</strong>
            </div>
          </div>
          <h1>Degen Trading Thread</h1>
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
              Degen Trading <span>Thread</span>
            </h1>
            <div className="byline">
              <img className="avatar avatar-lg" src={IMG('avatar.jpg')} alt="@obicle" />
              <span>
                oleh <strong>@obicle</strong>
              </span>
            </div>
            <p className="subtitle">
              Rangkuman lengkap strategi trading meme coin ala @obicle — dari setup
              teknikal, risk management, sampai sistem journaling — dirapikan biar enak
              dibaca ulang.
            </p>
            <div className="disclaimer">
              ⚠ konten ini adalah rangkuman edukasi/strategi milik pembuat thread
              aslinya (obicle). trading crypto &amp; meme coin berisiko tinggi, termasuk
              potensi rugi total modal — bukan rekomendasi finansial.
            </div>
            <Signature />
          </div>

          <section className="chapter" id="s1">
            <div className="eyebrow">
              <span className="n">01</span> / Tools
            </div>
            <h2>Trade Terminal — Padre</h2>
            <p>Platform trading yang dipakai obicle karena sifatnya all-in-one. Fitur unggulannya:</p>
            <ul className="list">
              <li>UI ringan dan smooth</li>
              <li>
                <strong>Wallet Tracker</strong> — bisa melacak hingga 10.000 wallet
                sekaligus, termasuk menandai wallet yang diikuti saat membeli koin (ikon
                wallet kuning)
              </li>
              <li>Deteksi avatar/meme yang di-reuse atau di-recycle (ditandai ikon "!")</li>
              <li>
                <strong>Alpha Group Tracker</strong> — bisa mengikuti call dari grup alpha
                tanpa perlu join, gratis
              </li>
              <li>Info paid/boost status di Dexscreener langsung dari platform</li>
              <li>Data top holder, dev holding, sniper, insider, bundler, fresh buys, dan fresh holding</li>
              <li>Listing launchpad baru yang cepat terdeteksi</li>
            </ul>
            <figure>
              <img src={IMG('img-01.png')} alt="Padre UI" />
            </figure>
          </section>

          <section className="chapter" id="s2">
            <div className="eyebrow">
              <span className="n">02</span> / Fondasi Teknikal
            </div>
            <h2>Market Structure</h2>
            <p>
              Cara membaca arah harga lewat pola swing high dan swing low untuk
              mendeteksi tren maupun potensi pembalikan (reversal).
            </p>

            <h3>Swing High &amp; Swing Low</h3>
            <ul className="list">
              <li>
                <strong>Swing High:</strong> titik puncak sebelum harga turun
              </li>
              <li>
                <strong>Swing Low:</strong> titik lembah sebelum harga naik
              </li>
            </ul>
            <p>Di sekitar titik-titik ini biasanya likuiditas berkumpul dan memicu pergerakan harga signifikan.</p>

            <h3 className="bull">Uptrend (Bullish)</h3>
            <p>
              Pola tangga naik: harga membentuk <strong>Higher High (HH)</strong> lalu
              terkoreksi membentuk <strong>Higher Low (HL)</strong>, berulang (HH → HL →
              HH). Selama pola ini tidak rusak, tren naik tetap valid.
            </p>
            <figure>
              <img src={IMG('img-02.jpg')} alt="Uptrend structure" />
            </figure>

            <h3 className="bear">Downtrend (Bearish)</h3>
            <p>
              Kebalikannya: harga membentuk <strong>Lower Low (LL)</strong> lalu naik
              sedikit membentuk <strong>Lower High (LH)</strong>, berulang (LL → LH →
              LL). Ini menandakan seller menguasai struktur pasar.
            </p>
            <figure>
              <img src={IMG('img-03.jpg')} alt="Downtrend structure" />
            </figure>

            <h3>Market Structure Shift (MSS)</h3>
            <ul className="list">
              <li>
                <strong>Bearish → Bullish:</strong> harga berhenti membuat LL, lalu
                menembus LH sebelumnya untuk membentuk HH baru
              </li>
              <li>
                <strong>Bullish → Bearish:</strong> harga berhenti membuat HH, lalu
                menembus HL sebelumnya untuk membentuk LL baru
              </li>
            </ul>
            <div className="callout warn">
              <span className="lbl">Kunci konfirmasi</span>
              Harus ada <strong>Displacement</strong> — dorongan harga yang kuat dan
              agresif dengan momentum besar, bukan sekadar sentuhan tipis ke level
              tersebut.
            </div>
            <figure>
              <img src={IMG('img-04.jpg')} alt="MSS example 1" />
            </figure>
            <figure>
              <img src={IMG('img-05.jpg')} alt="MSS example 2" />
            </figure>

            <h3>Jebakan Time Frame Besar vs Kecil</h3>
            <p>
              Kesalahan umum trader pemula: di TF kecil (misal 5 menit) grafik terlihat
              longsor/bearish shift, tapi saat di-zoom out ke TF besar (misal 4 jam)
              penurunan itu ternyata cuma koreksi sehat sebelum harga lanjut naik.
            </p>
            <div className="callout tip">
              <span className="lbl">Solusi</span>
              Selalu selaraskan arah trade dengan tren di time frame yang lebih besar.
            </div>

            <h3>False Shift (Pembalikan Palsu)</h3>
            <p>
              Tidak semua penembusan struktur berarti tren benar-benar berbalik.
              Seringkali "perubahan tren" di TF kecil hanyalah cara pasar mengambil
              diskon sebelum melanjutkan tren utama di TF besar. Entry tergesa-gesa
              tanpa melihat gambaran besar berisiko kena Stop Loss.
            </p>

            <h3>Cara Latihan Market Structure</h3>
            <ol className="steps">
              <li>Buka chart kosong</li>
              <li>Tandai Swing High dan Swing Low</li>
              <li>Tentukan apakah harga sedang membentuk HH/HL atau LH/LL</li>
              <li>Perhatikan bentuk Displacement saat tren berubah</li>
            </ol>
          </section>

          <section className="chapter" id="s3">
            <div className="eyebrow">
              <span className="n">03</span> / Strategi Inti
            </div>
            <h2>Gameplay</h2>
            <p>Strategi utama obicle menggabungkan EMA (Exponential Moving Average) dengan Stochastic RSI:</p>
            <div className="pill-grid">
              <div className="pill">EMA 25 &amp; 50 → short term</div>
              <div className="pill">EMA 100 &amp; 200 → long term</div>
              <div className="pill">+ Stochastic RSI</div>
            </div>
            <figure>
              <img src={IMG('img-06.jpg')} alt="EMA chart example 1" />
            </figure>
            <figure>
              <img src={IMG('img-07.jpg')} alt="EMA chart example 2" />
            </figure>

            <h3>Pemilihan Time Frame berdasarkan usia koin</h3>
            <table className="journal">
              <tbody>
                <tr>
                  <th>Umur Koin</th>
                  <th>Time Frame</th>
                </tr>
                <tr>
                  <td>6–12 jam</td>
                  <td>1 menit</td>
                </tr>
                <tr>
                  <td>12–48 jam</td>
                  <td>5 menit</td>
                </tr>
                <tr>
                  <td>&gt; 48 jam</td>
                  <td>15 menit</td>
                </tr>
              </tbody>
            </table>
            <p>
              Cara pakai EMA: cari koin yang harganya masih on-trend di atas EMA (atau
              EMA-nya menghadap ke atas terus), lalu tunggu harga menyentuh EMA dengan
              kondisi RSI di area bawah (oversold) sebagai sinyal entry.
            </p>
          </section>

          <section className="chapter" id="s4">
            <div className="eyebrow">
              <span className="n">04</span> / Reversal Play
            </div>
            <h2>Strat Lanjutan</h2>
            <p>
              Untuk kondisi market yang sedang downtrend dan belum ada runner baru, ini
              pendekatan mencari opportunity dari koin yang breakout dari tren
              bearish-nya:
            </p>
            <figure>
              <img src={IMG('img-08.jpg')} alt="Grail example" />
              <figcaption>Contoh: Grail — sempat break bullish trend EMA-nya</figcaption>
            </figure>
            <ol className="steps">
              <li>Masukkan koin tersebut ke Watch List</li>
              <li>
                Tunggu harga kembali di atas semua EMA (EMA 25 &amp; 50 cross ke atas
                EMA 100), menggunakan TF 5 menit
              </li>
              <li>Setelah harga kembali di atas semua EMA, tunggu retest ke EMA untuk entry</li>
            </ol>
            <figure>
              <img src={IMG('img-09.png')} alt="Retest entry" />
            </figure>
            <p>
              Contoh lain: <strong>Chuby Elephant</strong> — entry lebih awal (early),
              tetap melakukan scale-out profit ketika terlihat tanda downtrend, hasil
              profit sekitar <strong>200%</strong>.
            </p>
            <figure>
              <img src={IMG('img-10.png')} alt="Chuby Elephant profit" />
            </figure>
            <div className="callout stop">
              <span className="lbl">Invalidation / Stop Loss</span>
              Cut loss apabila harga break wick atau dip terakhir.
            </div>
            <figure>
              <img src={IMG('img-11.jpg')} alt="Stop loss example" />
            </figure>
          </section>

          <section className="chapter" id="s5">
            <div className="eyebrow">
              <span className="n">05</span> / Disiplin
            </div>
            <h2>Risk &amp; Money Management</h2>
            <ul className="list">
              <li>
                <strong>Risk Management</strong> → berapa persen yang boleh rugi per
                trade/hari
              </li>
              <li>
                <strong>Money Management</strong> → cara mengatur ukuran posisi
                (position sizing) agar sesuai dengan risk tersebut
              </li>
            </ul>
            <p>
              obicle bercerita pernah all-in dan revenge trading hingga rugi 90% dalam
              sehari, bahkan kena Margin Call dalam satu trade. Setelah menerapkan
              aturan berikut, ia bisa trading full time dan bertahan sampai sekarang:
            </p>

            <div className="rule-card">
              <span className="tag">Aturan #1</span>
              <strong>Max Risk per Trade: 10% dari total modal.</strong> Contoh: modal
              5 SOL → maksimal rugi per trade cuma 0.5 SOL.
            </div>
            <div className="rule-card">
              <span className="tag">Aturan #3</span>
              <strong>Compounding dari Profit.</strong> Modal per trade 0.2 SOL, profit
              30% → jadi 0.26 SOL. Entry berikutnya pakai size 0.26 SOL, profit lagi 30%
              → jadi 0.338 SOL. Size compounding dibatasi maksimal 1 SOL per trade.
            </div>
            <div className="rule-card">
              <span className="tag">Aturan #4</span>
              <strong>Withdraw saat modal 2x lipat.</strong> Modal awal (misal 5 SOL)
              di-withdraw ke rekening/wallet lain, supaya tidak merasa jumawa karena isi
              wallet masih terlihat banyak, dan tetap terlatih survive dengan wallet
              yang tersisa.
            </div>
            <div className="rule-card">
              <span className="tag">Aturan #5</span>
              <strong>Journal setiap trade.</strong> Tanpa journal, sulit tahu apakah
              money management benar-benar berjalan atau hasilnya cuma keberuntungan.
            </div>

            <div className="callout tip">
              "Disiplin dan konsisten adalah yang membuat trader bisa survive di dunia
              trading."
            </div>
          </section>

          <section className="chapter" id="s6">
            <div className="eyebrow">
              <span className="n">06</span> / Sistem
            </div>
            <h2>Trading Journal</h2>
            <p>
              Journal mengubah cara trading obicle dari sering rugi &amp; emosional
              menjadi lebih konsisten &amp; tenang — karena{' '}
              <strong>trading itu 80% psikologi, 20% strategi.</strong> Journal adalah
              cermin harian untuk melihat kesalahan tanpa emosi. Format sederhana,
              cukup 5 kolom, diisi 5–7 menit/hari (Sheets/Excel/Notion):
            </p>

            <table className="journal">
              <tbody>
                <tr>
                  <th>Kolom</th>
                  <th>Isi</th>
                </tr>
                <tr>
                  <td>1. Tanggal &amp; Pair</td>
                  <td>Contoh: 27 Mei 2026 – BTC/USDT 4H</td>
                </tr>
                <tr>
                  <td>2. Setup &amp; Bias</td>
                  <td>Higher TF bias (Bullish/Bearish/Sideway), setup yang dipakai, entry price, SL, TP target</td>
                </tr>
                <tr>
                  <td>3. Alasan Masuk</td>
                  <td>
                    Detail alasan entry (misal: EMA 100 + engulfing candle di 5M +
                    volume naik) — cek apakah beneran ikut aturan atau cuma FOMO
                  </td>
                </tr>
                <tr>
                  <td>4. Hasil Trade</td>
                  <td>Profit/Loss (% &amp; Rp), apakah ikut aturan, screenshot before/after, R:R aktual</td>
                </tr>
                <tr>
                  <td>5. Lesson + Emosi</td>
                  <td>Apa yang benar/salah, kondisi mental (tenang/FOMO/takut/serakah), improvement</td>
                </tr>
              </tbody>
            </table>

            <h3>Contoh entry real (27 Mei 2026)</h3>
            <div className="metric-row">
              <div className="metric">
                Pair
                <br />
                <b>CHUBY/SOL</b>
              </div>
              <div className="metric">
                Setup
                <br />
                <b>MSS Above EMA</b>
              </div>
              <div className="metric">
                Hasil
                <br />
                <b>+200%</b>
              </div>
            </div>
            <p>
              <strong>Alasan:</strong> harga kembali ke atas semua EMA + konfirmasi saat
              retest ke EMA. <strong>Lesson:</strong> sabar menunggu konfirmasi
              menghasilkan R:R lebih bagus dan mental lebih tenang.
            </p>
            <figure>
              <img src={IMG('img-12.png')} alt="Journal example screenshot" />
            </figure>

            <h3>Tips agar journaling tidak berhenti di hari ke-3</h3>
            <ul className="list">
              <li>Isi malam hari sebelum tidur — jadikan rutinitas</li>
              <li>Review 1x seminggu untuk melihat pola kesalahan</li>
              <li>Jangan menghakimi diri sendiri, cukup catat fakta</li>
              <li>Mulai kecil dulu — 3 trade sehari saja</li>
            </ul>
            <div className="callout tip">
              Saran untuk pemula: mulai malam ini, buat 1 kolom saja dulu ("Alasan
              Masuk"). Bedanya akan terasa dalam 1 minggu.
            </div>
          </section>

          <section className="chapter" id="s7">
            <div className="eyebrow">
              <span className="n">07</span> / Psikologi
            </div>
            <h2>Manajemen Emosi</h2>
            <p>Sebelum entry, tanyakan pada diri sendiri:</p>
            <ul className="list">
              <li>Sudah sesuai strategi/setup?</li>
              <li>Sudah sesuai konfirmasi?</li>
              <li>Apakah ini FOMO?</li>
              <li>Size sudah sesuai Risk &amp; Money Management?</li>
            </ul>
            <p>Kalau semua jawabannya sudah sesuai, keputusan entry akan lebih tenang dan terkontrol.</p>
          </section>

          <section className="chapter" id="s8">
            <div className="eyebrow">
              <span className="n">08</span> / Latar Belakang
            </div>
            <h2>Insight</h2>
            <p>
              obicle sempat vakum setelah terdampak <strong>LUNA Crash</strong> hingga
              tabungan habis. Sekitar setahun kemudian ia kembali masuk ke trading
              future, namun masih dengan pola lama: compounding all-in di meme coin,
              yang berujung kena Margin Call lagi beberapa kali.
            </p>
            <p>
              Titik baliknya adalah ketika menemukan komunitas{' '}
              <strong>@EnclaviumFNF</strong> melalui link FCFS — di sana ia belajar
              screening koin, trading di DEX, hingga DLMM Liquidity Provider, sampai
              akhirnya menemukan edge/gaya trading sendiri yang dipakai hingga sekarang.
            </p>
          </section>

          <section className="chapter" id="s9">
            <div className="eyebrow">
              <span className="n">09</span> / Manajemen Profit
            </div>
            <h2>Tips Agar Tidak Roundtrip</h2>
            <ul className="list">
              <li>Tentukan target profit harian (misal Rp 5 juta) — setelah tercapai, stop dan tutup chart</li>
              <li>
                Biasakan <strong>Take Profit</strong>, bukan "Take Picture" profit
                (screenshot doang tanpa realisasi)
              </li>
              <li>
                Kejar profit konsisten 30–50% per trade, dikumpulkan sedikit demi
                sedikit — daripada berharap perkalian besar tapi berujung rekt
              </li>
              <li>Stop revenge trade setelah lose streak dalam 1 hari</li>
              <li>Stop overtrade dan greedy</li>
            </ul>
          </section>

          <section className="chapter" id="s10">
            <div className="eyebrow">
              <span className="n">10</span> / Studi Kasus
            </div>
            <h2>Contoh Trade Breakdown</h2>
            <div className="metric-row">
              <div className="metric">
                Pair
                <br />
                <b>$Kiyomasa/SOL</b>
              </div>
              <div className="metric">
                Hasil
                <br />
                <b>+110%</b>
              </div>
            </div>
            <p
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '12.5px',
                color: 'var(--muted)',
                wordBreak: 'break-all',
              }}
            >
              Contract: ANP1wJHYWYQPfrZvg8FnjduwfBVJhRV3xqKcs3yapump
            </p>
            <figure>
              <img src={IMG('img-13.jpg')} alt="Trade breakdown overview" />
            </figure>

            <ol className="steps">
              <li>Cek HTF (higher time frame) — di sini pakai TF 15m. Harga menyentuh EMA 50 dan RSI bottoming.</li>
            </ol>
            <figure>
              <img src={IMG('img-14.jpg')} alt="HTF check" />
            </figure>

            <ol className="steps" start="2">
              <li>Pindah ke TF lebih kecil (5m) — harga menyentuh EMA 100 dan RSI juga bottoming, mulai setup.</li>
            </ol>
            <figure>
              <img src={IMG('img-15.jpg')} alt="LTF setup" />
            </figure>

            <ol className="steps" start="3">
              <li>Tunggu terjadi Market Structure Shift.</li>
            </ol>
            <figure>
              <img src={IMG('img-16.jpg')} alt="MSS confirmation" />
            </figure>

            <ol className="steps" start="4">
              <li>Entry saat harga menyentuh EMA 100.</li>
            </ol>
            <figure>
              <img src={IMG('img-17.jpg')} alt="Entry point" />
            </figure>

            <ol className="steps" start="5">
              <li>Stop Loss ketika harga break EMA 200.</li>
            </ol>
            <figure>
              <img src={IMG('img-18.jpg')} alt="Stop loss point" />
            </figure>

            <ol className="steps" start="6">
              <li>
                Take Profit — kembali ke preferensi masing-masing: untuk scalping
                30–50% sudah oke, atau jika yakin bisa set TP di Higher High (ATH)
                terakhir.
              </li>
            </ol>
            <figure>
              <img src={IMG('img-19.jpg')} alt="Take profit" />
            </figure>
          </section>

          <section className="chapter" id="s11">
            <div className="eyebrow">
              <span className="n">11</span> / Evaluasi
            </div>
            <h2>Cara Review Journal Mingguan</h2>
            <p>
              Tujuan: menaikkan winrate 10–20% dalam 30 hari. Daily journal mencatat apa
              yang terjadi; weekly review membantu memahami <em>kenapa</em> itu terjadi
              supaya tidak mengulang kesalahan yang sama (ingat: trading 80%
              psikologi).
            </p>

            <h3>STEP 1 — Export &amp; Compile Semua Trade Minggu Ini</h3>
            <p>Filter journal berdasarkan tanggal, ambil semua trade 7 hari terakhir, salin ke sheet baru "Weekly Review". Kolom wajib:</p>
            <div className="pill-grid">
              <div className="pill">Tanggal &amp; Jam</div>
              <div className="pill">Pair</div>
              <div className="pill">Entry &amp; Size</div>
              <div className="pill">Exit Price</div>
              <div className="pill">P/L % &amp; $</div>
              <div className="pill">R:R</div>
              <div className="pill">Emosi</div>
              <div className="pill">Setup</div>
            </div>

            <h3>STEP 2 — Hitung Metrik Kunci</h3>
            <ul className="list">
              <li>Winrate minggu ini (%)</li>
              <li>Total P/L minggu ini</li>
              <li>Average R:R (win vs loss)</li>
              <li>Jumlah trade</li>
              <li>% trade yang over risk (&gt;1–2% per trade)</li>
              <li>% trade yang dipengaruhi emosi (FOMO/revenge)</li>
            </ul>

            <h3>STEP 3 — Jawab 5 Pertanyaan Wajib</h3>
            <ul className="list">
              <li>Setup mana yang paling profit minggu ini?</li>
              <li>Setup mana yang paling sering loss?</li>
              <li>Kapan paling sering overtrade? (jam/kondisi market)</li>
              <li>Emosi apa yang paling merusak?</li>
              <li>Apa yang dilakukan berbeda dibanding minggu lalu?</li>
            </ul>

            <h3>STEP 4 — Lihat Pattern 3 Minggu Terakhir</h3>
            <ul className="list">
              <li>Selalu loss di akhir pekan?</li>
              <li>Selalu loss di jam tertentu?</li>
              <li>Meme coin selalu jebak saat volume spike tapi holder &lt;500?</li>
              <li>Sering masuk tanpa konfirmasi EMA 25/50/100/200?</li>
              <li>Revenge trade muncul setelah 2 loss beruntun?</li>
            </ul>

            <h3 className="bear">STEP 5 — Drop 1 Setup Paling Merugikan</h3>
            <div className="callout stop">
              "Setup chase volume spike di meme baru tanpa cek smart money wallet &amp;
              konfirmasi entry → drop total mulai minggu ini."
            </div>

            <h3 className="bull">STEP 6 — Scale Up 1 Setup Paling Konsisten</h3>
            <div className="callout tip">
              "Setup EMA 50/100/200 + Stoch RSI oversold + Runner Today → naikkan risk
              dari 1% jadi 1.5% mulai minggu depan."
            </div>

            <h3>STEP 7 — 3 Adjustment untuk Minggu Depan</h3>
            <ul className="list">
              <li>Max trade per hari = 4 (bukan 7)</li>
              <li>Kalau sudah +150% hari ini → stop trading (no greed)</li>
              <li>Sebelum entry wajib screenshot 3 konfirmasi (chart + on-chain + emosi)</li>
            </ul>

            <hr className="div" />
            <h3>Contoh hasil review mingguan obicle</h3>
            <div className="metric-row">
              <div className="metric">
                Winrate
                <br />
                <b>71%</b>
              </div>
              <div className="metric">
                Total P/L
                <br />
                <b>+$612</b>
              </div>
              <div className="metric">
                Naik dari
                <br />
                <b>55%</b>
              </div>
            </div>
            <ul className="list">
              <li>Pattern: 4 dari 5 loss berasal dari revenge trade setelah loss pertama</li>
              <li>Di-drop: chase meme coin saat FOMO jam 2 pagi</li>
              <li>Di-scale up: trade only runner di hari sebelumnya yang masih kuat bertahan di Mcap 150K</li>
              <li>Adjustment: no trade saat US Open dan setelah jam 00.00 WIB; kalau loss 2x berturut-turut → istirahat dulu</li>
            </ul>

            <h3>Proyeksi hasil jika konsisten 4 minggu</h3>
            <table className="journal">
              <tbody>
                <tr>
                  <th>Minggu</th>
                  <th>Hasil</th>
                </tr>
                <tr>
                  <td>Minggu 1</td>
                  <td>Winrate naik 8–10%</td>
                </tr>
                <tr>
                  <td>Minggu 2–3</td>
                  <td>Emosi jauh lebih terkendali</td>
                </tr>
                <tr>
                  <td>Minggu 4</td>
                  <td>Winrate naik total ±20% + profit lebih stabil</td>
                </tr>
              </tbody>
            </table>
            <p>
              <strong>Intinya:</strong> trading berdasarkan data diri sendiri, bukan
              lagi mengikuti perasaan.
            </p>
          </section>

          <footer>rangkuman thread @obicle · dirapikan untuk arsip pribadi</footer>
        </main>
      </div>
    </div>
  )
}
