import { useState } from 'react';

import { NextPage } from 'next';

import CheckStatusHeader from '@/components/check-status/CheckStatusHeader';
import CheckStatusInitState from '@/components/check-status/CheckStatusInitState';
import CheckStatusResultState from '@/components/check-status/result/CheckStatusResultState';

const CheckStatus: NextPage = () => {
  const [value, setValue] = useState('');

  const onSubmit = (search: string) => {
    setValue(search);
  };

  return (
    <div className="px-6 lg:px-44">
      <div className="flex flex-col items-center">
        <CheckStatusHeader onSubmit={onSubmit} />
        <div className="mt-10 w-full">
          {!value && <CheckStatusInitState />}
          {!!value && <CheckStatusResultState />}
        </div>
      </div>
    </div>
  );
};

export default CheckStatus;
