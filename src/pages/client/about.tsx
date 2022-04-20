import AboutPage from '@/components/AboutPage';
import Container from '@/components/Container';
import { Page } from '@types';

const About: Page = () => {
  return (
    <section className="text-white bg-blueMain">
      <Container className="flex flex-col justify-center items-center py-10 min-h-[calc(100vh-80px)] xl:px-24">
        <AboutPage />
      </Container>
    </section>
  );
};

export default About;
