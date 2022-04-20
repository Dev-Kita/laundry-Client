import FeatureSection from '@/components/AboutPage/FeatureSection';
import MitraSection from '@/components/AboutPage/MitraSection';
import ServiceSection from '@/components/AboutPage/ServiceSection';
import { Page } from '@types';

const About: Page = () => {
  return (
    <>
      <ServiceSection />
      <FeatureSection />
      <MitraSection />
    </>
  );
};

export default About;
