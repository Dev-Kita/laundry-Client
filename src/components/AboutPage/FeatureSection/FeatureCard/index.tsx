import ItemCard from './ItemCard';
import listFeature from './listFeature';

const FeatureCard = () => {
  return (
    <div className="py-6 px-10 w-full bg-gray-300 rounded-md">
      <ul>
        {listFeature.map((item, index) => (
          <li key={index}>
            <ItemCard title={item.title} description={item.description} />
            <hr className="my-3 border-gray-400" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
