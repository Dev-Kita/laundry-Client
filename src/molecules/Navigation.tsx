import { useState } from 'react';

import Hamburger from 'hamburger-react';

import Button from '../atoms/Button';
import MenuItem from '../atoms/MenuItem';
import Container from '../components/Container';

const menus: Array<{ url: string; title: string }> = [
  {
    title: 'Home',
    url: '#',
  },
  {
    title: 'About',
    url: '#',
  },
  {
    title: 'Check Status',
    url: '#',
  },
];

const Navigation = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <Container className="flex relative flex-col justify-between items-center text-blueMain bg-white md:flex-row">
      {/* title */}
      <div className="flex justify-between items-center w-full">
        <h3 className="py-5 text-3xl font-medium">Laundry Kita</h3>
        <div className="md:hidden">
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
        {menus.map((i) => (
          <MenuItem key={i.title} title={i.title} url={i.url} />
        ))}
        <Button
          rounded
          variant="outline-primary"
          className="py-1 my-8 md:my-0 md:ml-8"
        >
          Login
        </Button>
      </div>
      {/* end menus */}
    </Container>
  );
};

export default Navigation;
