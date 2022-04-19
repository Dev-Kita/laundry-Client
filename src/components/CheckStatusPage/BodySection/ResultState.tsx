import { useState } from 'react';

import ResultHeader from './ResultHeader';

const ResultState = () => {
  const [currentStep] = useState(3);

  return (
    <>
      {/* detail */}
      <div className="flex flex-col py-12 px-9 mb-8 w-full bg-gray-200 rounded-sm min-h-96">
        <ResultHeader currentStep={currentStep} />
        <div className="p-24 mt-10 h-24 text-center bg-gray-300 rounded-lg">
          Cucian Anda selesai diproses dan siap diambil, apabila Anda memilih
          opsi Antar Cucian maka harap tunggu kurir mengantarkan cucian Anda
        </div>
      </div>
      {/* end of detail */}
    </>
  );
};

export default ResultState;
