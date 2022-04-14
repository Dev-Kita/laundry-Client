import { useState } from 'react';

import { NextPage } from 'next';

import CheckStatusHeader from '@/components/check-status/CheckStatusHeader';
import CheckStatusInitState from '@/components/check-status/CheckStatusInitState';

const CheckStatus: NextPage = () => {
  const [value, setValue] = useState('');
  const onSubmit = () => {};

  return (
    <div className="px-6 lg:px-60">
      <div className="flex flex-col items-center">
        <CheckStatusHeader
          onSubmit={onSubmit}
          value={value}
          onChange={setValue}
        />
        <div className="mt-10 w-full">
          <CheckStatusInitState />
        </div>
      </div>
    </div>
  );
};

export default CheckStatus;
