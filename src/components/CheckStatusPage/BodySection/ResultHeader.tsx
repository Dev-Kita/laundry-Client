import { FC } from 'react';

import DeliveryStep from './Steps/DeliveryStep';
import DepositeStep from './Steps/DepositeStep';
import FinishStep from './Steps/FinishStep';
import ProcessStep from './Steps/ProcessStep';

const ResultHeader: FC<{ currentStep: number }> = ({ currentStep }) => {
  return (
    <>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1328.13 248.13"
      >
        <FinishStep isActive={currentStep > 3} />
        <DeliveryStep isActive={currentStep > 2} />
        <ProcessStep isActive={currentStep > 1} />
        <DepositeStep isActive={currentStep > 0} />
      </svg>
    </>
  );
};

export default ResultHeader;
