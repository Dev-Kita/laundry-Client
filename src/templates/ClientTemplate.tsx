import * as React from 'react';
import { FC } from 'react';

import Navigation from '@/molecules/Navigation';

const ClientTemplate: FC = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        {children}
      </div>
    </>
  );
};
export default ClientTemplate;
