import FooterSection from '@/components/LandingPage/FooterSection';
import HeadingSection from '@/components/LandingPage/HeadingSection';
import ServiceSection from '@/components/LandingPage/ServiceSection';
import { Page } from '@types';

const Landing: Page = () => {
  return (
    <>
      <HeadingSection />
      <ServiceSection />
      <FooterSection />
      <hr />
    </>
  );
};

export default Landing;
