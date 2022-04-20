export type StepType = {
  title: string;
  description: string;
};

const listStep: StepType[] = [
  {
    title: 'Menghubungi Admin',
    description:
      'Hubungi Admin mengenai informasi tentang registrasi mitra maupun seputar aplikasi',
  },
  {
    title: 'Melakukan Regristasi',
    description:
      'Ikuti langkah-langkah registrasi sesuai instruksi dari admin Laundry Kita',
  },
  {
    title: 'Instalasi Program & Pengarahan',
    description:
      'Dalam Proses ini anda akan mendapat akses aplikasi dan akan diarahkan dalam penggunaan aplikasi Laundry Kita',
  },
  {
    title: 'Selesai',
    description:
      'Anda dapat menerapkan aplikasi Laundry Kita dalam usaha anda, apabila ada permasalahan anda bisa langsung menghubungi Admin',
  },
];

export default listStep;
