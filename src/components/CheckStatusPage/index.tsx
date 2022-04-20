import { useState } from 'react';

import Search from './Search';
import InitialStep from './Steps/InitialStep';
import ResultStep from './Steps/ResultStep';

const CheckStatusPage = () => {
  const [value, setValue] = useState('');

  const onSubmit = (search: string) => {
    setValue(search);
  };
  return (
    <div className="flex flex-col items-center">
      <Search onSubmit={onSubmit} />
      <div className="mt-10 w-full">
        {!value && <InitialStep />}
        {!!value && <ResultStep />}
      </div>
    </div>
  );
};

export default CheckStatusPage;
