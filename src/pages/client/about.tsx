import ServiceSection from '@/components/AboutPage/ServiceSection';
import Container from '@/components/Container';
import { Page } from '@types';

const About: Page = () => {
  return (
    <Container className="bg-blueMain">
      <ServiceSection />
    </Container>
  );
};

export default About;
