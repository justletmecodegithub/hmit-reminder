# HMIT Reminder — Sistem Reminder Kegiatan Himpunan Mahasiswa Teknologi Informasi ITS

Website reminder & calendar kegiatan resmi HMIT ITS dengan desain biru kebanggaan, 100% mirip website utama HMIT!

## Fitur Utama
- Login & Register khusus Pengurus HMIT
- Tambah Proker Baru + upload poster
- Dashboard daftar semua kegiatan
- Calendar view cantik otomatis terupdate
- Desain full biru HMIT + gear berputar
- Responsif mobile 100%
- Background gradient biru

## Tech Stack
- **Frontend**: React.js + Tailwind CSS + React Router
- **Backend**: Node.js + Express.js
- **Database**: MongoDB (lokal / Atlas)
- **Auth**: JWT (JSON Web Token)
- **Deployment**: Vercel (frontend) + Render (backend)

## Struktur Folder
hmit-reminder/
├── frontend/           ← React + Tailwind

├── backend/            ← Express + MongoDB

├── public/             ← logo-hmit.png, gear.png

├── .gitignore

└── README.md


## Cara Menjalankan Lokal
```bash
# 1. Clone repo
git clone https://github.com/justletmecodegithub/hmit-reminder.git
cd hmit-reminder

# 2. Jalankan backend
cd backend
npm install
npm run dev

# 3. Jalankan frontend (terminal baru)
cd ../frontend
npm install
npm start
