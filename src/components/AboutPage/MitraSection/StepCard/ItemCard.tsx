import { FC } from 'react';

import { StepType } from './listStep';

const ItemCard: FC<StepType & { number: number }> = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-10"></div>
      <div className="flex absolute z-10 justify-center items-center w-16 h-16 text-3xl font-bold text-white bg-blueMain rounded-full">
        {number}
      </div>
      <div className="flex relative flex-col flex-1 items-center py-6 px-7 w-80 text-center bg-gray-200 rounded-lg shadow">
        <h6 className="mt-3 mb-5 text-lg font-medium">{title}</h6>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ItemCard;
