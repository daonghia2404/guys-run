import React from 'react';

import Footer from '@/containers/Footer';
import Header from '@/containers/Header';
import ButtonToTop from '@/components/ButtonToTop';

const Guest = ({ children }) => {
  return (
    <div className="Guest">
      <div className="Guest-header">
        <Header />
      </div>
      <div className="Guest-body">{children}</div>
      <div className="Guest-footer">
        <Footer />
      </div>

      <ButtonToTop />
    </div>
  );
};

export default Guest;
