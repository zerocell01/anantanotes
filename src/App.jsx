import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { notes } from './notes.js'
import DegenTradingObicle from './pages/DegenTradingObicle.jsx'
import ArbitrageUyar121 from './pages/ArbitrageUyar121.jsx'
import ArbitrageUyar121Screening from './pages/ArbitrageUyar121Screening.jsx'
import ArbitrageUyar121Wormhole from './pages/ArbitrageUyar121Wormhole.jsx'
import { ThemeProvider } from './ThemeContext.jsx'
import ThemeToggle from './ThemeToggle.jsx'

function NoteCard({ note }) {
  const accentClass = note.accent ? `accent-${note.accent}` : ''
  return (
    <Link className={`note-card ${accentClass}`.trim()} to={note.href}>
      <div className="note-card-row">
        {note.avatar && <img className="note-avatar" src={note.avatar} alt={note.author} />}
        <div>
          <div className="note-meta">
            <span className="dot" />
            {note.topic} · {note.author}
          </div>
          <div className="note-title">{note.title}</div>
          <div className="note-desc">{note.desc}</div>
        </div>
      </div>
    </Link>
  )
}

function groupByCategory(list) {
  const groups = []
  const index = new Map()
  for (const note of list) {
    const key = note.category ?? 'Lainnya'
    if (!index.has(key)) {
      index.set(key, { category: key, accent: note.accent, items: [] })
      groups.push(index.get(key))
    }
    index.get(key).items.push(note)
  }
  return groups
}

function Home() {
  const groups = groupByCategory(notes)

  return (
    <>
      <div className="grid-bg" />
      <main>
        <div className="brand">
          <strong>ananta</strong> notes
        </div>
        <h1>Catatan Belajar Web3</h1>
        <p className="lede">
          Kumpulan thread, artikel, dan rangkuman dari mentor &amp; sumber-sumber belajar
          Web3 - trading, on-chain, arbit dan lainnya.
        </p>

        <h2 className="section">Catatan ({notes.length})</h2>
        {groups.map((group) => (
          <div key={group.category} className="note-group">
            <h3 className={`group-title accent-${group.accent}`}>
              {group.category}
              <span className="group-count">{group.items.length}</span>
            </h3>
            <div className="notes-list">
              {group.items.map((note) => (
                <NoteCard key={note.slug} note={note} />
              ))}
            </div>
          </div>
        ))}

        <footer>Ananta Notes</footer>
      </main>
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes/degen-trading-obicle" element={<DegenTradingObicle />} />
          <Route path="/notes/arbitrage-uyar121" element={<ArbitrageUyar121 />} />
          <Route path="/notes/arbitrage-uyar121-screening" element={<ArbitrageUyar121Screening />} />
          <Route path="/notes/arbitrage-uyar121-wormhole" element={<ArbitrageUyar121Wormhole />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
