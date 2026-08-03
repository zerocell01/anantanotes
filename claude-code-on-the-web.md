# Catatan: Claude Code on the Web

Sumber: https://code.claude.com/docs/en/claude-code-on-the-web

> Status: Research preview untuk Pro, Max, dan Team users, serta Enterprise users dengan premium seats atau Chat + Claude Code seats.

## Apa itu?

Claude Code on the web menjalankan task di infrastruktur cloud milik Anthropic melalui [claude.ai/code](https://claude.ai/code). Sesi tetap berjalan meski browser ditutup, dan bisa dipantau dari aplikasi mobile Claude.

## Cloud Environments

- Setiap sesi cloud berjalan di sebuah **cloud environment** — konfigurasi tersimpan yang mengatur akses jaringan, environment variables, dan setup script.
- Saat onboarding, Claude Code otomatis membuat environment **Default** dengan akses jaringan **Trusted**.
- Environment yang sama berlaku di mana pun sesi cloud dimulai: web, terminal, Claude Tag, routines, mobile, dan Desktop app.
- Sesi Claude Tag (channel) hanya memakai organization-shared environments.

## Autentikasi GitHub

Dua cara memberi akses repo GitHub ke sesi cloud:

| Metode | Cara kerja | Cocok untuk |
|---|---|---|
| **GitHub App** | Authorize Claude GitHub App saat web onboarding | Onboarding via browser; tim yang butuh Auto-fix |
| **`/web-setup`** | Sinkronkan token `gh` CLI lokal ke akun Claude | Developer individu yang sudah pakai `gh` |

- Kedua metode memberi akses ke *semua* repo yang bisa dilihat akun GitHub yang terhubung, bukan hanya repo tempat App diinstal.
- Instalasi App diperlukan khusus untuk fitur **Auto-fix** (menerima PR webhook).
- Team/Enterprise Owner bisa menonaktifkan `/web-setup` lewat toggle "Quick web setup".
- Organisasi dengan Zero Data Retention tidak bisa pakai `/web-setup` atau fitur cloud session lain.

## Pindah Task antara Web dan Terminal

Butuh Claude Code CLI yang login ke akun claude.ai yang sama. Handoff dari CLI bersifat satu arah: bisa tarik cloud session ke terminal (`--teleport`), tapi tidak bisa mendorong sesi terminal ke web (kecuali via Desktop app "Continue in").

### Terminal → Web (`--cloud`)

```bash
claude --cloud "Fix the authentication bug in src/auth/login.ts"
```

- Membuat cloud session baru; meng-clone remote GitHub repo direktori saat ini pada branch saat ini — **push dulu** perubahan lokal karena VM clone dari GitHub, bukan dari mesin lokal.
- Bekerja dengan satu repo dalam satu waktu.
- `--remote` adalah alias lama yang sudah deprecated untuk `--cloud`.
- Pantau progres dengan `/tasks` di CLI, atau buka sesi di claude.ai / mobile app.
- Jika Claude bertanya dan sesi idle, jawaban tetap bisa diberikan sampai environment expired.

**Tips:**
- *Plan locally, execute remotely*: mulai dengan `claude --permission-mode plan` untuk menyusun rencana, commit & push, lalu jalankan `claude --cloud "Execute the migration plan in ..."`.
- *Ultraplan*: menyusun & mereview plan langsung di web session.
- *Run in parallel*: setiap `--cloud` membuat sesi independen; bisa jalankan banyak task sekaligus, pantau semua via `/tasks`.

**Repo lokal tanpa GitHub**: jika repo tidak terhubung ke GitHub, Claude Code akan bundle repo lokal dan upload langsung (fallback otomatis). Bisa dipaksa dengan `CCR_FORCE_BUNDLE=1`. Syarat bundle:
- Harus git repo dengan minimal 1 commit
- Ukuran bundle < 100 MB (fallback bertingkat: current branch saja → snapshot squashed)
- File untracked tidak ikut ter-bundle (harus `git add` dulu)
- Sesi dari bundle tidak bisa push balik ke remote tanpa GitHub auth

### Web → Terminal (`--teleport`)

Beberapa cara menarik cloud session ke terminal:
- `claude --teleport` (interactive picker) atau `claude --teleport <session-id>`
- `/teleport` atau `/tp` di dalam sesi CLI yang sedang berjalan
- `/tasks` lalu tekan `t`
- Dari web interface: tombol **Open in CLI**

Saat teleport: Claude memverifikasi repo yang benar, fetch & checkout branch dari cloud session, dan memuat riwayat percakapan penuh. Sesi terminal punya salinan sendiri — kerja baru di sana tetap lokal, tidak muncul di sesi cloud. Untuk tetap steer dari HP setelah teleport, jalankan `/remote-control`.

`--teleport` ≠ `--resume` (resume = riwayat lokal mesin ini, bukan cloud session).

**Syarat teleport:**
| Syarat | Detail |
|---|---|
| Clean git state | Tidak ada uncommitted changes (akan diminta stash) |
| Repo yang benar | Harus checkout repo yang sama, bukan fork |
| Branch tersedia | Branch dari cloud session harus sudah di-push ke remote |
| Akun sama | Harus login ke akun claude.ai yang sama dengan cloud session |

`--teleport` butuh autentikasi via claude.ai subscription (bukan API key). Tidak tersedia di Bedrock/Google Cloud Agent Platform/Microsoft Foundry.

## Mengelola Sesi

Sesi muncul di sidebar claude.ai/code — bisa review, share, archive, atau delete.

### Manajemen Context

Command bawaan yang menghasilkan output teks tersedia di cloud session. Command yang biasanya membuka picker/panel di terminal berperilaku beda:
- `/model`, `/effort`, `/fast`, `/color`, `/rename`: pakai argumen langsung, mis. `/model sonnet` (butuh CLI v2.1.205+ di environment sesi)
- `/config`: di web membuka halaman settings, bukan set value

Command context:
| Command | Tersedia di cloud? | Catatan |
|---|---|---|
| `/compact` | Ya | Bisa dikasih fokus, mis. `/compact keep the test output` |
| `/context` | Ya | Menampilkan isi context window |
| `/clear` | Tidak | Mulai sesi baru dari sidebar |

- Auto-compaction jalan otomatis saat context window mendekati penuh. Bisa diatur lewat env var `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` (mis. `=70`) dan `CLAUDE_CODE_AUTO_COMPACT_WINDOW`.
- Subagents bekerja sama seperti lokal; otomatis load dari `.claude/agents/` di repo.
- Agent teams nonaktif secara default, aktifkan dengan env var `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`.

### Review, Share, Archive, Delete

- **Review**: setiap sesi menampilkan diff indicator (`+42 -18`); bisa buka diff view, komentar inline, kirim ke Claude.
- **Share**:
  - Enterprise/Team: opsi **Private** / **Team**. Sesi Claude in Slack otomatis Team visibility.
  - Max/Pro: opsi **Private** / **Public**. Cek konten sensitif sebelum share publik (repo access verification tidak default-on).
  - Pengaturan sharing detail: Settings > Claude Code > Sharing settings.
- **Archive**: sembunyikan dari list default, masih bisa difilter untuk dilihat.
- **Delete**: permanen, perlu konfirmasi.

## Auto-fix Pull Requests

Claude bisa memantau PR dan otomatis merespons kegagalan CI serta komentar review.

**Cara mengaktifkan:**
- PR dibuat di Claude Code on the web: buka CI status bar → **Auto-fix**
- Dari terminal: `/autofix-pr` di branch PR tsb (butuh `gh`)
- Dari mobile app: minta Claude "watch this PR and fix any CI failures or review comments"
- PR mana pun: paste URL PR ke sesi dan minta Claude auto-fix

Butuh Claude GitHub App terinstal di repo. Auto-fix adalah toggle per-PR.

**Cara Claude merespons event:**
- **Clear fixes**: langsung fix, push, jelaskan di sesi
- **Ambiguous/architecturally significant**: tanya user dulu
- **Duplicate/no-action**: dicatat, dilewati

Catatan penting:
- GitHub tidak mengirim webhook saat base branch maju dan menyebabkan merge conflict — Claude tidak otomatis tahu, harus diminta rebase manual.
- Balasan Claude ke review comment thread diposting via akun GitHub user (muncul sebagai username user) tapi diberi label sebagai dari Claude Code.
- ⚠️ Warning: hati-hati dengan automation berbasis comment-trigger (Atlantis, Terraform Cloud, GitHub Actions on `issue_comment`) — balasan Claude bisa memicu workflow tsb. Pertimbangkan nonaktifkan auto-fix untuk repo yang PR comment-nya bisa deploy infra/privileged ops.

## Security & Isolation

- **Isolated VMs**: tiap sesi di VM terisolasi, dikelola Anthropic.
- **Network access controls**: default terbatas, bisa dinonaktifkan. Meski network access dinonaktifkan, Claude Code tetap bisa komunikasi ke Anthropic API (data bisa keluar VM lewat jalur ini).
- **Credential protection**: kredensial sensitif (git credentials, signing keys) tidak pernah masuk ke sandbox — autentikasi via secure proxy dengan scoped credentials.
- **Secure analysis**: kode dianalisis & dimodifikasi di VM terisolasi sebelum bikin PR.

## Troubleshooting

- **Runtime API errors** (`API Error: 500`, `529`, `429`, "Prompt is too long"): lihat halaman Error reference (sama dengan CLI/Desktop).
- **Session creation failed**: cek status.claude.com, retry setelah beberapa saat, pastikan repo reachable & akun GitHub punya akses.
- **Unable to get organization UUID**: butuh login claude.ai (bukan API key) → jalankan `/login`. Tidak tersedia di Bedrock/Google Cloud Agent Platform/Microsoft Foundry.
- **Remote Control session expired/access denied**: `/login` ulang, pastikan akun sama, atau Owner belum enable cloud sessions untuk organisasi.
- **Environment expired**: VM direclaim setelah idle lama → buka ulang sesi dari claude.ai/code untuk provision VM baru dengan riwayat percakapan tetap ada.

## Limitasi

- **Rate limits**: berbagi rate limit dengan penggunaan Claude/Claude Code lain di akun yang sama. Tidak ada biaya compute cloud VM terpisah.
- **Repository authentication**: pindah sesi web ↔ lokal hanya jika login akun yang sama.
- **Platform restrictions**: clone repo & buat PR butuh GitHub (termasuk GitHub Enterprise Server untuk Team/Enterprise). Repo non-GitHub (GitLab, Bitbucket, dll) bisa dikirim sebagai local bundle, tapi sesi tidak bisa push balik ke remote.
- **Organization IP allowlist**: cloud session memanggil Anthropic API dari infrastruktur Anthropic, bukan network organisasi — jika IP allowlisting aktif, semua cloud session gagal autentikasi (berlaku juga untuk Code Review & Routines). Perlu hubungi Anthropic support untuk exempt.

## Referensi Terkait

- [Cloud environments](https://code.claude.com/docs/en/cloud-environments)
- [Ultraplan](https://code.claude.com/docs/en/ultraplan)
- [Ultrareview](https://code.claude.com/docs/en/ultrareview)
- [Routines](https://code.claude.com/docs/en/routines)
- [Hooks configuration](https://code.claude.com/docs/en/hooks)
- [Settings reference](https://code.claude.com/docs/en/settings)
- [Security](https://code.claude.com/docs/en/security)
- [Data usage](https://code.claude.com/docs/en/data-usage)
- [Claude Tag](https://claude.com/docs/claude-tag/overview)
