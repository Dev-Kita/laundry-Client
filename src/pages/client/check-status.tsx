import { NextPage } from 'next';

import CheckStatusPage from '@/components/CheckStatusPage';

const CheckStatus: NextPage = () => {
  return (
    <div className="px-6 min-h-screen lg:px-44">
      <CheckStatusPage />
    </div>
  );
};

export default CheckStatus;
