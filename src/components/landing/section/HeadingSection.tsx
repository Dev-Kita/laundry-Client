import Link from 'next/link';

import Button from '@/atoms/Button';

import Container from '../../Container';

const HeadingSection = () => {
  return (
    <Container className="bg-blueMain">
      <section
        className={`min-h-screen flex-1 flex justify-center items-center flex-col text-white`}
      >
        <h1 className="text-5xl font-bold">Laundry Kita</h1>
        <p className="text-lg">
          Aplikasi yang menyediakan layanan manajemen laundry untuk pemilik
          usaha
        </p>
        <div className="mt-14">
          <Link href={'/check-status'} passHref>
            <Button
              variant="outline"
              title="Button Cek Status"
              className="mr-4"
              rounded
            >
              Cek Status
            </Button>
          </Link>
          <Button variant="white" title="Button About Laundry Kita" rounded>
            About Laundry Kita
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default HeadingSection;
