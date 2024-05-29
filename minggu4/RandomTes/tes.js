// Studi Kasus: Manajemen Perpustakaan
// Anda diminta untuk membuat sebuah program sederhana untuk manajemen perpustakaan di sebuah sekolah. 
// Program ini harus mampu melakukan hal-hal berikut:

// - Menambahkan buku baru ke dalam perpustakaan.
// - Meminjam buku dari perpustakaan.
// - Mengembalikan buku yang telah dipinjam.
// - Menampilkan daftar buku yang tersedia di perpustakaan.
// - Menampilkan daftar buku yang telah dipinjam beserta peminjamnya.


// @Petunjuk:
//  1. Implementasikan kelas Buku yang memiliki properti judul, pengarang, dan tersedia (untuk menandai apakah buku tersedia atau tidak).
//  2. Implementasikan kelas Perpustakaan yang memiliki properti daftarBuku (untuk menyimpan buku-buku yang ada di perpustakaan).
//  3. Buatlah metode pada kelas Perpustakaan untuk 
// ->menambahkan buku baru, 
// ->meminjam buku, 
// ->mengembalikan buku, 
// ->menampilkan daftar buku yang tersedia, dan; 
// ->menampilkan daftar buku yang telah dipinjam beserta peminjamnya.
//  => Setelah Anda menyelesaikan quiz, kirimkan kode implementasi Anda. Saya akan memeriksanya untuk Anda!

class Buku {
    constructor(judul, pengarang, jumlahBuku) {
        this.judul = judul;
        this.pengarang = pengarang;
        this.jumlahBuku = jumlahBuku;
    }
}

class Perpustakaan {
    constructor() {
        this.daftarBuku = [];
        this.peminjaman = [];
        this.pengembalian = [];
    }

    tambahBuku(judul, pengarang, jumlahBuku) {
        const bukuBaru = new Buku(judul, pengarang, jumlahBuku);
        this.daftarBuku.push(bukuBaru);
        console.log(`Buku ${judul} Sejumlah ${jumlahBuku} Berhasil Ditambahkan`);
    }

    pinjamBuku(judul) {
        const cariBuku = this.daftarBuku.find(item => item.judul === judul);
        if (!cariBuku) {
            console.log(`Maaf buku ${judul} tidak ditemukan`);
            return;
        }
        if (cariBuku.jumlahBuku < 1) {
            console.log(`Maaf buku ${judul} tidak tersedia`);
            return;
        }

        cariBuku.jumlahBuku -= 1;
        const tanggal = new Date().toLocaleDateString();
        this.peminjaman.push({ judul: judul, tanggal: tanggal });
        console.log(`Buku ${judul} berhasil dikembalikan`);
    }

    pengembalianBuku(judul) {
        const cariBuku = this.daftarBuku.find(item => item.judul === judul);
        if (!cariBuku) {
            console.log(`Maaf buku ${judul} tidak ditemukan`);
            return;
        }

        cariBuku.jumlahBuku += 1;
        const tanggal = new Date().toLocaleDateString();
        this.pengembalian.push({ judul: judul, tanggal: tanggal });
        console.log(`Buku ${judul} berhasil dipinjam`);
    }

    tampilkanDaftarBuku() {
        console.log('Daftar buku yang tersedia: ');
        this.daftarBuku.forEach(buku => {
            console.log(`- ${buku.judul} (${buku.jumlahBuku} buku)`);
        });
    }

    tampilkanPeminjaman() {
        console.log('Buku yang sedang dipinjam: ');
        this.peminjaman.forEach(pinjam => {
            console.log(`- ${pinjam.judul}, Dipinjam tanggal ${pinjam.tanggal}`);
        });
        console.log('Buku yang sudah dikembalikan: ');
        this.pengembalian.forEach(kembali => {
            console.log(`- ${kembali.judul}, Dikembalikan tanggal ${kembali.tanggal}`);
        });
    }
}

const perpus = new Perpustakaan();

perpus.tambahBuku("Harry Potter", "J.K. Rowling", 10);
perpus.tambahBuku("The Great Gatsby", "F. Scott Fitzgerald", 15);
perpus.tambahBuku("To Kill a Mockingbird", "Harper Lee", 12);

perpus.pinjamBuku("Harry Potter");
perpus.pinjamBuku("The Great Gatsby");

perpus.pengembalianBuku("Harry Potter");

perpus.tampilkanDaftarBuku();
perpus.tampilkanPeminjaman();

console.log(perpus.peminjaman)