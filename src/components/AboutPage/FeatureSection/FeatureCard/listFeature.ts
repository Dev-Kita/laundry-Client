export type FeatureType = {
  title: string;
  description: string;
};
const listFeature: FeatureType[] = [
  {
    title: 'Opsi Antar Jemput',
    description:
      'Pelanggan akan memilih opsi antar jemput cucian sehinnga mereka tidak perlu datang ke tempat Mitra.',
  },
  {
    title: 'Menyimpan Data Riwayat Transaksi',
    description:
      'Riwayat transaksi akan disimpan sehingga dapat dilihat dilain waktu dan dapat dicari melalui data pelanggan.',
  },
  {
    title: 'Pemberitahuan Status Pengerjaan',
    description:
      'Status pengerjaan laudry dapat dilihat di website sehingga mempermudah pelanggan untuk melihat status pengerjaan.',
  },
  {
    title: 'Cetak Nota',
    description:
      'Setelah menginput data laudry akan tampil opsi untuk mencetak nota dengan menggunakan priter thermal.',
  },
  {
    title: 'Rekap Pemasukan Bulanan',
    description:
      'Setiap bulan akan ada rekap pemasukan untuk mempermudah mitra melihat laba dari laudrynya.',
  },
  {
    title: 'Mengatur Antrian Cucian (Todo)',
    description:
      'Mempermudah mitra mengatur antru untuk mengerjakan laudry an.',
  },
  {
    title: 'Rating Layanan',
    description:
      'Menampilkan layanan yang paling sering digunakan oleh pelanggan.',
  },
];
export default listFeature;
