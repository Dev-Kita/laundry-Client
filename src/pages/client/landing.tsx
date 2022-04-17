import FooterSection from '@/components/landing/section/FooterSection';
import HeadingSection from '@/components/landing/section/HeadingSection';
import ServiceSection from '@/components/landing/section/ServiceSection';
import { Page } from '@types';

const Landing: Page = () => {
  return (
    <>
      <HeadingSection />
      <ServiceSection />
      <FooterSection />
    </>
  );
};

export default Landing;
