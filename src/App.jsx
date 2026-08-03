import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { notes } from './notes.js'
import DegenTradingObicle from './pages/DegenTradingObicle.jsx'
import { ThemeProvider } from './ThemeContext.jsx'
import ThemeToggle from './ThemeToggle.jsx'

function NoteCard({ note }) {
  return (
    <Link className="note-card" to={note.href}>
      <div className="note-meta">
        <span className="dot" />
        {note.topic} · {note.author}
      </div>
      <div className="note-title">{note.title}</div>
      <div className="note-desc">{note.desc}</div>
    </Link>
  )
}

function Home() {
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
          Web3 — trading, on-chain, dan seluk-beluk lainnya. Terus bertambah.
        </p>

        <h2 className="section">Catatan ({notes.length})</h2>
        <div className="notes-list">
          {notes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>

        <footer>Ananta Notes — dikelola oleh @zerocell01</footer>
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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
