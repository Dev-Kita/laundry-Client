import Container from '@/components/Container';

import MitraCard from './StepCard';

const MitraSection = () => {
  return (
    <Container className="text-blueMain bg-white">
      <section className="py-12 min-h-screen xl:px-24">
        <h3 className="mb-16 text-3xl font-bold text-center">
          PENDAFTARAN MITRA
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-2">
            <MitraCard />
          </div>
          <div className="flex flex-col justify-center items-center p-3 font-['Ubuntu'] font-bold">
            <div>
              <div className="text-[6rem] md:text-[7rem]">Laundry</div>
              <div className="-mt-20 text-[10rem] md:text-[13rem]">Kita</div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default MitraSection;
