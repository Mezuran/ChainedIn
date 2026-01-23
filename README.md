<div align="center">
  <a href="https://github.com/EndstoneMC/endstone/releases">
    <img src="https://minecraft.wiki/images/thumb/Dirt.png/150px-Dirt.png?89d72" alt="Logo" width="80" height="80">
  </a>

<h3>ChainedIn</h3>

<p>
  <b>A Budget aVersion of Linkedin With AI Powered. Written in JavaScript and Python</b><br>
  Project Dedicated to Unikom Codelabs
</p>

<p>
  <a href="https://github.com/Mezuran/ChainedIn/actions">
    <img src="https://github.com/Mezuran/ChainedIn/actions/workflows/ci.yml/badge.svg" alt="SolidStart CI">
  </a>
  <a href="https://app.netlify.com/projects/codelabs-chainedin/deploys">
    <img src="https://api.netlify.com/api/v1/badges/4ab29d49-6d47-4327-a566-5d78a7f3232f/deploy-status" alt="Netlify Status">
  </a>
  <a href="https://github.com/Mezuran/ChainedIn/network/dependencies">
    <img src="https://badgen.net/badge/dependabot/enabled/green?icon=dependabot" alt="Dependabot">
  </a>
</p>

<p>
  <img src="https://img.shields.io/badge/node-%3E%3D20-success?logo=node.js" alt="Node Version">
  <img src="https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=flat&logo=pnpm&logoColor=f69220" alt="PNPM">
  <img src="https://img.shields.io/badge/SolidJS-2c4f7c?style=flat&logo=solid&logoColor=c8c9cb" alt="SolidJS">
  <img src="https://img.shields.io/badge/python-3670A0?style=flat&logo=python&logoColor=ffdd54" alt="Python">
  <img src="https://img.shields.io/github/license/Mezuran/ChainedIn" alt="License">
</p>

</div>

## Why ChainedIn

Official LinkedIn is very hard to understand, that's why we came for the new Budget version of LinkedIn<br />
With AI Powered Skill Finding, The person who wants to work will be

## Installation
Requirements
- Node.JS v22.22.0
- PNPM v10.28.1
- Windows 10+ or Linux (Ubuntu 22.04+, Debian 12+)

### Building from source

```shell
# Clone this github repository
git clone https://github.com/Mezuran/ChainedIn.git

# Call directory the Project
cd ChainedIn

# Installing Dependencies
pnpm install

# Run the Website
pnpm run dev
```

## Workflow

### Persiapan (Sebelum Ngoding)
```shell
# 1. Pindah ke branch utama dulu
git checkout main

# 2. Tarik kodingan terbaru dari teman/server (Wajib!)
git pull origin main

# 3. (Khusus pengguna PNPM) Install ulang barangkali ada library baru
pnpm install
```

### Mulai Ngoding (Buat Cabang Baru)
```shell
# Format: git checkout -b [nama-branch-baru]
# Tips: Pakai awalan 'feat/' untuk fitur, 'fix/' untuk perbaikan error

git checkout -b feat/tambah-badge-readme
# atau
git checkout -b fix/tombol-login-rusak  
```

### Simpan Perubahan (Commit)
```shell
# 1. Pilih file yang mau disimpan (titik artinya semua file)
git add .

# 2. Beri label pada bungkusan tersebut
git commit -m "Update README dengan badge CI/CD baru"
```

### Upload ke GitHub (Push)
```shell
# Format: git push origin [nama-branch-kamu]

git push origin feat/tambah-badge-readme
```

### Gabungkan (Pull Request / PR)
1. Buka repository GitHub kamu di browser.
2. Kamu akan melihat notifikasi kuning: "feat/tambah-badge-readme had recent pushes".
3. Klik tombol hijau "Compare & pull request".
4. Tulis deskripsi apa yang kamu ubah.
5. Klik Create pull request.
6. Tunggu GitHub Actions (CI) berjalan (cek apakah build sukses/gagal).
7. Jika hijau (sukses), klik Merge pull request -> Confirm merge.

### Bersih - Bersih (Setelah Merge)
```shell
# 1. Balik ke main
git checkout main

# 2. Tarik update terbaru (yang barusan kamu merge di web)
git pull origin main

# 3. Hapus branch lama (opsional, biar laptop ga penuh sampah branch)
git branch -d feat/tambah-badge-readme
```

## License

ChainedIn is licensed under the [Apache-2.0 license](LICENSE).
