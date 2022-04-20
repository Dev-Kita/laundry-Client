import ItemCard from './ItemCard';
import listStep from './listStep';

const MitraCard = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {listStep.map((item, index) => (
        <ItemCard key={index} number={index + 1} {...item} />
      ))}
    </div>
  );
};

export default MitraCard;
