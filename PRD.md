# Product Requirement Document (PRD)
## Sistem Informasi Kasir & Manajemen Servis - Bengkel Radiator Sony Jaya Kediri

### 1. Ringkasan Eksekutif & Tujuan Proyek
Bengkel Radiator Sony Jaya Kabupaten Kediri memerlukan digitalisasi penuh untuk proses bisnis operasional. Sistem berbasis web ini bertujuan untuk menggantikan pencatatan manual dengan sistem terintegrasi yang menangani pencatatan antrean servis radiator, pengelolaan stok material (tembaga, kuningan, aluminium), Point of Sale (POS) kasir, serta pelaporan keuangan real-time.

### 2. Peran Pengguna (User Roles) & Hak Akses
1. **Admin / Pemilik Bengkel**: Akses penuh ke seluruh fitur sistem, Data Master, Dashboard Analitis, dan Laporan Pendapatan.
2. **Kasir**: Akses transaksi Point of Sale (POS), pencatatan antrean kendaraan servis, dan pencetakan Struk / Nota Pembayaran Thermal.

### 3. Modul & Fitur Utama
- **Autentikasi & Authorization**: Multi-role login (Admin vs Kasir).
- **Master Data Management**: Stok Radiator (Tembaga, Kuningan, Aluminium), Suku Cadang, dan Tarif Jasa Servis.
- **Antrean Servis & Pengerjaan**: Board pelacakan status perbaikan (Menunggu -> Dikerjakan -> Uji Tekanan -> Selesai).
- **Kasir Point of Sale (POS)**: Katalog interaktif, diskon, hitung kembalian, dan modal Thermal Receipt Print.
- **Dashboard & Alert System**: Ringkasan pendapatan harian/bulanan dan Alert Stok Minimum otomatis.
