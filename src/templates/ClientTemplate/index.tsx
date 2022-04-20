import * as React from 'react';
import { FC } from 'react';

import Navigation from '@/molecules/Navigation';

import Footer from './Footer';

const ClientTemplate: FC = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        {children}
        <Footer />
      </div>
    </>
  );
};
export default ClientTemplate;
