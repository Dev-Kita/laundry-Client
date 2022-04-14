import { FC, InputHTMLAttributes } from 'react';

import Link from 'next/link';

import Button from '../../atoms/Button';
import Container from '../Container';

type MainType = FC<InputHTMLAttributes<HTMLInputElement>>;

const Main: MainType = () => {
  return (
    <Container
      className={`bg-blueMain flex-1 flex justify-center items-center flex-col text-white`}
    >
      <h1 className="text-5xl font-bold">Laundry Kita</h1>
      <p className="text-lg">
        Aplikasi yang menyediakan layanan manajemen laundry untuk pemilik usaha
      </p>
      <div className="mt-14">
        <Link href={'check-status'} passHref>
          <Button variant="outline" className="mr-4" rounded>
            Cek Status
          </Button>
        </Link>
        <Button variant="white" rounded>
          About Laundry Kita
        </Button>
      </div>
    </Container>
  );
};

export default Main;
