import ServiceCard from './ServicesCard';

const ServiceSection = () => {
  return (
    <>
      <h3 className="mb-10 text-2xl font-bold">LAYANAN</h3>
      <div className="flex flex-wrap gap-5 justify-center">
        <ServiceCard />
      </div>
    </>
  );
};

export default ServiceSection;
