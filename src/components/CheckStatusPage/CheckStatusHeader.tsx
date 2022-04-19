import { FC } from 'react';

import InputGroup from '@/molecules/InputGroup';

type CheckStatusHeaderType = {
  onSubmit: (value: string) => void;
};

const CheckStatusHeader: FC<CheckStatusHeaderType> = (props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // get search value

    const search = e.currentTarget.elements.namedItem(
      'search'
    ) as HTMLInputElement;

    props.onSubmit(search.value);
  };

  return (
    <>
      {/* title */}
      <h3 className="my-14 text-2xl font-bold text-blueMain">
        Cek Status Cucian
      </h3>
      {/* end of title */}

      {/* search */}
      <form onSubmit={handleSubmit} className="w-full">
        <InputGroup
          buttonProps={{ type: 'submit', children: 'Cek Status' }}
          inputProps={{
            name: 'search',
            placeholder: 'Masukkan Token Transaksi...',
          }}
        />
      </form>
      {/* end of search */}
    </>
  );
};

export default CheckStatusHeader;
