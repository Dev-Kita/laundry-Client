import { useState } from 'react';

import Hamburger from 'hamburger-react';
import Link from 'next/link';

import Button from '../../atoms/Button';
import Container from '../../components/Container';
import Menus from './Menus';

const Navigation = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <Container className="flex relative flex-col justify-between items-center text-blueMain bg-white md:flex-row">
      {/* title */}
      <div className="flex justify-between items-center w-full">
        <Link href={'/'} passHref>
          <a>
            <h3 className="py-5 text-3xl font-medium">Laundry Kita</h3>
          </a>
        </Link>
        <div className="md:hidden" role={'button'} title="Button show menu">
          <Hamburger onToggle={() => setIsMenuOpened((v) => !v)} />
        </div>
      </div>
      {/* end title */}

      {/* menus */}
      <div
        className={`${
          isMenuOpened ? 'flex' : 'hidden'
        } flex-col items-center bg-white gap-x-3 w-full md:bottom-0 md:flex md:flex-row md:justify-end`}
      >
        <Menus />
        <Button
          rounded
          variant="outline-primary"
          className="py-1 my-8 md:my-0 md:ml-8"
          title="Button login"
        >
          Login
        </Button>
      </div>
      {/* end menus */}
    </Container>
  );
};

export default Navigation;
