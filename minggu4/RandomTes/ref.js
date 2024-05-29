class Buku {
    constructor(judul, pengarang, jumlahStok) {
        this.judul = judul;
        this.pengarang = pengarang;
        this.jumlahStok = jumlahStok;
    }
}

class TokoBuku {
    constructor() {
        this.inventaris = [];
        this.transaksi = [];
    }

    tambahBuku(judul, pengarang, jumlahStok) {
        const bukuBaru = new Buku(judul, pengarang, jumlahStok);
        this.inventaris.push(bukuBaru);
        console.log(`Buku dengan judul "${judul}" berhasil ditambahkan ke dalam inventaris.`);
    }

    jualBuku(judul, jumlah) {
        const bukuDitemukan = this.inventaris.find(buku => buku.judul === judul);

        if (!bukuDitemukan) {
            console.log(`Maaf, buku dengan judul "${judul}" tidak tersedia.`);
            return;
        }

        if (bukuDitemukan.jumlahStok < jumlah) {
            console.log(`Maaf, stok buku "${judul}" tidak mencukupi.`);
            return;
        }

        bukuDitemukan.jumlahStok -= jumlah;
        const tanggal = new Date().toLocaleDateString();
        this.transaksi.push({ judul, jumlah, tanggal });
        console.log(`Buku dengan judul "${judul}" sebanyak ${jumlah} berhasil dijual.`);
    }

    tampilkanStokBuku() {
        console.log("Daftar Buku yang Tersedia:");
        this.inventaris.forEach(buku => {
            console.log(`- ${buku.judul} (${buku.jumlahStok} buah)`);
        });
    }

    tampilkanLaporanPenjualan() {
        console.log("Laporan Penjualan:");
        this.transaksi.forEach(transaksi => {
            console.log(`- ${transaksi.judul}: ${transaksi.jumlah} buah, tanggal ${transaksi.tanggal}`);
        });
    }
}

// Contoh Penggunaan
const tokoBuku = new TokoBuku();
tokoBuku.tambahBuku("Harry Potter", "J.K. Rowling", 10);
tokoBuku.tambahBuku("The Great Gatsby", "F. Scott Fitzgerald", 15);
tokoBuku.tambahBuku("To Kill a Mockingbird", "Harper Lee", 12);

tokoBuku.jualBuku("Harry Potter", 3);
tokoBuku.jualBuku("The Great Gatsby", 5);

tokoBuku.tampilkanStokBuku();
tokoBuku.tampilkanLaporanPenjualan();
