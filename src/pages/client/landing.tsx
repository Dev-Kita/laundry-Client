import FooterSection from '@/components/LandingPage/section/FooterSection';
import HeadingSection from '@/components/LandingPage/section/HeadingSection';
import ServiceSection from '@/components/LandingPage/section/ServiceSection';
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
