import { FC, useState } from 'react';

import ArrowDownIcon from '@/Icons/ArrowDownIcon';

import { FeatureType } from './listFeature';

const ItemCard: FC<FeatureType> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="select-none">
      <div
        className="flex justify-between my-2 mb-1 cursor-pointer"
        role={'button'}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h6 className="text-lg font-medium">{title}</h6>
        {/* TODO : add interaction on click */}
        <button>
          <ArrowDownIcon width={10} />
        </button>
      </div>
      {isOpen && <p className="text-gray-600">{description}</p>}
    </div>
  );
};

export default ItemCard;
