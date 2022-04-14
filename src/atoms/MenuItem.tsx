import { Url } from 'url';

import Link from 'next/link';

type MenuItemType = React.FC<{ url: Url | string; title: string }>;

const MenuItem: MenuItemType = ({ url, title }) => {
  return (
    <Link href={url}>
      <a
        title={`Menu ${title}`}
        role={'button'}
        className="p-3 w-full text-xl font-medium text-center bg-white hover:border-0 md:w-fit md:text-left"
      >
        {title}
      </a>
    </Link>
  );
};

export default MenuItem;
