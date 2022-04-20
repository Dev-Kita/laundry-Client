import { Url } from 'url';

import Link from 'next/link';

type MenuItemType = React.FC<{ url: Url | string; title: string }>;

const beforeClass =
  "before:absolute before:bottom-3 before:content-[''] before:bg-blueMain hover:before:w-1 hover:before:transition-all hover:before:duration-700 before:h-1";

const MenuItem: MenuItemType = ({ url, title }) => {
  return (
    <Link href={url}>
      <a
        title={`Menu ${title}`}
        role={'button'}
        className={`${beforeClass} relative p-3  w-full h-full text-xl font-medium  hover:border-0 text-center flex justify-center bg-white before:rounded md:w-fit md:text-left`}
      >
        {title}
      </a>
    </Link>
  );
};

export default MenuItem;
