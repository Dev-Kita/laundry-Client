import { FC } from 'react';

import InputGroup from '@/molecules/InputGroup';

type CheckStatusHeaderType = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

const CheckStatusHeader: FC<CheckStatusHeaderType> = (props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit();
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
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
            value: props.value,
            onInput: handleInput,
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
