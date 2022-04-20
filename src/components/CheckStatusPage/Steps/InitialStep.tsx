import SearchIcon from '@/Icons/SearchIcon';

const InitialStep = () => {
  return (
    <>
      {/* detail */}
      <div className="flex flex-col justify-center items-center w-full h-96 bg-gray-200 rounded-sm">
        <SearchIcon className="w-11 text-gray-500" />
        <h3 className="mt-4 text-lg font-bold text-gray-500">
          Masukkan Token Transaksi Anda...
        </h3>
      </div>
      {/* end of detail */}
    </>
  );
};

export default InitialStep;
