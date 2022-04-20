import { useState } from 'react';

import { NextPage } from 'next';

import InitResult from '@/components/CheckStatusPage/BodySection/InitResult';
import ResultState from '@/components/CheckStatusPage/BodySection/ResultState';
import HeaderSection from '@/components/CheckStatusPage/HeaderSection';

const CheckStatus: NextPage = () => {
  const [value, setValue] = useState('');

  const onSubmit = (search: string) => {
    setValue(search);
  };

  return (
    <div className="px-6 min-h-screen lg:px-44">
      <div className="flex flex-col items-center">
        <HeaderSection onSubmit={onSubmit} />
        <div className="mt-10 w-full">
          {!value && <InitResult />}
          {!!value && <ResultState />}
        </div>
      </div>
    </div>
  );
};

export default CheckStatus;
