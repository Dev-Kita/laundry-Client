import { useState } from 'react';

import ResultHeader from './ResultHeader';

const ResultState = () => {
  const [currentStep] = useState(3);

  return (
    <>
      {/* detail */}
      <div className="flex flex-col justify-center py-12 px-9 mb-8 w-full bg-gray-200 rounded-sm ">
        <ResultHeader currentStep={currentStep} />
        <div className="p-5 text-center bg-gray-300 rounded-lg lg:p-24 lg:mt-10">
          Cucian Anda selesai diproses dan siap diambil, apabila Anda memilih
          opsi Antar Cucian maka harap tunggu kurir mengantarkan cucian Anda
        </div>
      </div>

      {/* end of detail */}
    </>
  );
};

export default ResultState;
