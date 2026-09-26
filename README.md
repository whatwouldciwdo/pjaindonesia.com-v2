# Ventrex Website Clone (100% Full Website Replica)

Website clone lengkap dari [https://www.ventrex.com/en/](https://www.ventrex.com/en/) dengan tingkat kemiripan 100% (*pixel-perfect*), mencakup **seluruh 42 halaman** (15 halaman utama & korporat + 27 halaman detail produk teknis), 370+ gambar lokal beresolusi tinggi, dokumen PDF/brosur, font Satoshi asli, video loop hero, hingga sistem interaksi scroll dan navigasi fullscreen overlay.

---

## Daftar Halaman yang Dikloning (42 Halaman)

### 1. Halaman Utama & Solusi Korporat (15 Halaman)
- **Homepage**: `/` atau `/en/`
- **Air Conditioning Valves**: `/en/air-conditioning-valves/`
- **H2 – Hydrogen**: `/en/hydrogen/`
- **CNG / LNG**: `/en/cng-lng/`
- **Air Compressors**: `/en/compressors/`
- **About Us**: `/en/about-us/`
- **Aalberts Group**: `/en/about-us/aalberts/`
- **Competence Center**: `/en/competence-center/`
- **Responsibility & Sustainability**: `/en/responsibility/`
- **Careers**: `/en/careers/`
- **Downloads**: `/en/download/`
- **Contact Us**: `/en/contact/`
- **Imprint**: `/en/imprint/`
- **Cookie Policy**: `/en/cookie/`
- **Privacy Policy**: `/en/privacy-policy/`

### 2. Halaman Detail Produk Teknis (27 Halaman)
- `/en/products/epdm-filling-valve-core-r134a_r1234yf/`
- `/en/products/check-valve-r744-2/`
- `/en/products/epr-evo-2/`
- `/en/products/epr-evo-3/`
- `/en/products/epr-cng-hd/`
- `/en/products/large-bore-valve-core/`
- `/en/products/epr-lng-hd/`
- `/en/products/valve-housing/`
- `/en/products/valve-caps/`
- `/en/products/r744-filling-valve-core/`
- `/en/products/pre-assembled-charge-ports/`
- `/en/products/lng-cryogenic-valves/`
- `/en/products/compressor-for-seats-and-industrial-use-gen-2/`
- `/en/products/compressor-for-seats-and-industrial-use-gen-3/`
- `/en/products/drain-valve/`
- `/en/products/liquified-h2-pressure-relief-valve/`
- `/en/products/h2-service-defueling-port-receptacle/`
- `/en/products/h2-solenoid-valve/`
- `/en/products/h2-on-tank-valve/`
- `/en/products/mechanical-pressure-regulator-h2-700bar/`
- `/en/products/h2-end-plug/`
- `/en/products/h2-octoblock-electronic-pressure-regulators/`
- `/en/products/h2-electronic-pressure-regulator-350-bar/`
- `/en/products/hnbr-filling-valve-core-r134a_r1234yf_r290/`
- `/en/products/r744-pressure-relief-valve/`
- `/en/products/ventcon-pid-pressure-control-system/`
- `/en/products/fuel-shut-off-valve-for-ch4-h2-nh3/`

---

## Fitur Utama

- **100% Offline-Ready & Self-Contained**: Semua aset (370+ gambar produk, 14 brosur teknis PDF, video hero mp4, font Satoshi WOFF2/WOFF, dan SVG spritesheet) disimpan secara lokal di folder `assets/`.
- **Navigasi Internal Saling Terhubung**: Mengklik menu navbar, dropdown, tombol "Discover more", maupun kartu produk pada grid akan langsung membuka halaman lokal terkait.
- **Bebas Masalah Scrolling**: Seluruh halaman telah disematkan formula `--vh` responsif instan sehingga tinggi hero maupun body dihitung presisi 100vh tanpa hambatan scroll.
- **Dukungan Routing Bersih (*Clean URLs*)**: Server otomatis memetakan URL tanpa ekstensi `.html` (misal `/en/about-us` atau `/en/about-us/`) ke file `index.html` yang sesuai.

---

## Cara Menjalankan

Cukup jalankan perintah berikut di terminal:
```bash
npm start
```
atau
```bash
node server.js
```
Lalu buka browser di:
👉 **[http://localhost:3001](http://localhost:3001)** (atau port yang tertera pada konsol).

---

## Struktur Direktori

```
d:\pjaindonesia.com/
├── index.html                   # Halaman utama root
├── package.json                 # Konfigurasi project & script npm start
├── server.js                    # Web server statis dengan clean URL routing & streaming video
├── README.md                    # Dokumentasi lengkap
├── assets/
│   ├── css/
│   │   ├── global.css           # Styling dasar, typography font-face & layout
│   │   ├── index.css            # Styling homepage
│   │   └── pages/               # 13 CSS khusus per template subhalaman
│   ├── js/
│   │   ├── main.js              # Script interaksi (menu, sticky switcher, swiper)
│   │   └── vendor/              # GSAP, ScrollTrigger, Swiper lokal
│   ├── font/Satoshi/            # Font resmi Satoshi (Regular, Medium, Bold)
│   ├── images/                  # Gambar statis, logo partner, dan 370+ gambar produk dinamis
│   ├── downloads/               # 14 dokumen brosur dan katalog PDF
│   ├── video/                   # Video loop hero desktop & mobile
│   └── svg/sprites.svg          # Spritesheet SVG asli Ventrex
└── en/                          # Direktori seluruh 42 halaman HTML Ventrex
    ├── index.html
    ├── air-conditioning-valves/
    ├── hydrogen/
    ├── cng-lng/
    ├── compressors/
    ├── about-us/
    │   ├── index.html
    │   └── aalberts/
    ├── competence-center/
    ├── responsibility/
    ├── careers/
    ├── download/
    ├── contact/
    ├── imprint/
    ├── cookie/
    ├── privacy-policy/
    └── products/                # 27 subdirektori produk dengan index.html masing-masing
```
