import Image from 'next/image';

import Container from '@/components/Container';

import FeatureCard from './FeatureCard';

const FeatureSection = () => {
  return (
    <Container className="text-blueMain bg-white">
      <section className="py-12 min-h-screen xl:px-24">
        <h3 className="mb-16 text-3xl font-bold text-center">FITUR-FITUR</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="order-2 mt-5 lg:order-1">
            <FeatureCard />
          </div>
          <div className="flex order-1 justify-center py-11 lg:order-2 lg:py-0">
            <div className="flex relative justify-center w-full h-[500px] lg:min-h-min">
              <Image
                src={'/assets/images/homescreen.png'}
                layout="fill"
                objectFit="contain"
                alt="Feature"
                className="z-10"
              />
              <div className="absolute left-20 w-28 h-28 bg-gray-200 rounded-full"></div>
              <div className="absolute mt-11 w-96 h-96 bg-gray-200 rounded-full"></div>
              <div className="absolute right-20 bottom-0 w-28 h-28 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default FeatureSection;
