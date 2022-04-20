import { FC, SVGProps } from 'react';

import CheckStatusIcon from '@/Icons/CheckStatusIcon';
import DeliveryIcon from '@/Icons/DeliveryIcon';
import HistoryIcon from '@/Icons/HistoryIcon';
import MarketingIcon from '@/Icons/MarketingIcon';
import TodoIcon from '@/Icons/TodoIcon';

type ListType = {
  icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  discription: string;
};

const list: ListType[] = [
  {
    icon: MarketingIcon,
    title: 'Pemasaran',
    discription:
      'Meningkatkan Minat Pelanggan karena menggunakan basis digital',
  },
  {
    icon: HistoryIcon,
    title: 'Riwayat Transaksi',
    discription:
      'Setiap melakukan transaksi akan tercatat, apabila diperlukan data tidak akan hilang',
  },
  {
    icon: TodoIcon,
    title: 'Todo',
    discription:
      'Ketika ada cucian yang belum dikonfirmasi diproses maka akan ada list cucian yang harus diproses',
  },
  {
    icon: DeliveryIcon,
    title: 'Antar Jemput',
    discription:
      'Dikondisi pandemi seperti ini penjemputan cucian akan membantu mencegah penularan Covid-19',
  },
  {
    icon: CheckStatusIcon,
    title: 'Cek Status',
    discription:
      'Pelanggan dapat melihat status cucian, sehingga mereka tau kapan harus mengambil cucian',
  },
];

export default list;
