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
        <p className="text-lg text-center">
          Aplikasi manajemen laundry untuk pemilik usaha laundry
        </p>
        <div className="mt-14">
          <Link href={'/check-status'} passHref>
            <Button
              variant="outline"
              title="Button Cek Status"
              className="mr-4 w-full md:max-w-min"
              rounded
            >
              Cek Status
            </Button>
          </Link>
          <Link href={'/about'}>
            <Button
              variant="white"
              className="w-full md:max-w-min"
              title="Button About Laundry Kita"
              rounded
            >
              About Laundry Kita
            </Button>
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default HeadingSection;
