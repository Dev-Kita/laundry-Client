import MenuItem from '@/atoms/MenuItem';

import listMenu from './list-menu';

const Menus = () => {
  return (
    <>
      {listMenu.map((i) => (
        <MenuItem key={i.title} title={i.title} url={i.url} />
      ))}
    </>
  );
};

export default Menus;
