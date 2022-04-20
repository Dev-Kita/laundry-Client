import list from './list-service';

const ServiceCard = () => {
  return (
    <>
      {list.map(({ title, discription, icon: Icon }) => (
        <div
          key={title}
          className="flex flex-col flex-wrap items-center p-4 py-6 w-full text-center text-blueMain bg-white rounded-lg md:w-72 xl:w-96"
        >
          <Icon className="mb-4" />
          <h5 className="mb-1 text-lg font-medium">{title}</h5>
          <p>{discription}</p>
        </div>
      ))}
    </>
  );
};

export default ServiceCard;
