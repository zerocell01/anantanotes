import { notes } from './notes.js'

function NoteCard({ note }) {
  return (
    <a className="note-card" href={note.href}>
      <div className="note-meta">
        <span className="dot" />
        {note.topic} · {note.author}
      </div>
      <div className="note-title">{note.title}</div>
      <div className="note-desc">{note.desc}</div>
    </a>
  )
}

export default function App() {
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
