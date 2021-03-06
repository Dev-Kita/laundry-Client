import Container from '@/components/Container';

import ServiceCard from './ServicesCard';

const ServiceSection = () => {
  return (
    <Container className="bg-blueMain">
      <section className="flex flex-col justify-center items-center py-10 min-h-[calc(100vh-80px)] text-white  xl:px-24">
        <h3 className="mb-10 text-3xl font-bold">LAYANAN</h3>
        <div className="flex flex-wrap gap-5 justify-center">
          <ServiceCard />
        </div>
      </section>
    </Container>
  );
};

export default ServiceSection;
