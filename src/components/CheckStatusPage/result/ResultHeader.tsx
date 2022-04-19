import { FC, memo } from 'react';

import Step from '@/atoms/Step';

const stepList = [
  {
    imgSrc: '/icons/disetorkan.svg',
    titleProps: 'DISETORKAN',
  },
  {
    imgSrc: '/icons/proses.svg',
    titleProps: 'DIPROSES',
  },
  {
    imgSrc: '/icons/siap-diambil.svg',
    titleProps: 'SIAP DIAMBIL / DIKIRIM',
  },
  {
    imgSrc: '/icons/selesai.svg',
    titleProps: 'SELESAI',
  },
];

const ResultHeader: FC<{ currentStep: number }> = ({ currentStep }) => {
  const progress = stepList.map((step, index) => {
    const thisStep = index + 1;
    return (
      <Step key={index} isDone={currentStep >= thisStep} imgSrc={step.imgSrc}>
        {step.titleProps}
      </Step>
    );
  });

  return <ul className="flex justify-between w-full">{progress}</ul>;
};

export default memo(ResultHeader);
