import { useMemo } from 'react';

import Container from '@/components/Container';
import IconCircle from '@/components/LandingPage/ServiceSection/IconCircle';

type ServiceType = {
  src: string;
  text: string;
};
const serviceList: ServiceType[] = [
  {
    src: '/icons/marketing.svg',
    text: 'Pemasaran',
  },
  {
    src: '/icons/history.svg',
    text: 'Riwayat Transaksi',
  },
  {
    src: '/icons/todo.svg',
    text: 'Todo',
  },
  {
    src: '/icons/delivery.svg',
    text: 'Antar Jemput',
  },
  {
    src: '/icons/search.svg',
    text: 'Cek Status',
  },
];

const ServiceSection = () => {
  const services = useMemo(() => {
    return serviceList.map(({ src, text }, index) => (
      <IconCircle key={index} src={src} text={text} />
    ));
  }, []);

  return (
    <Container className="py-24 bg-white">
      <section className={`flex items-center flex-col flex-1 text-white`}>
        <h3 className="mb-14 text-2xl font-bold text-blueMain">Layanan</h3>
        <div className="flex flex-wrap gap-6 justify-center items-center lg:gap-x-16">
          {services}
        </div>
      </section>
    </Container>
  );
};

export default ServiceSection;
