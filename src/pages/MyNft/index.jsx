import React, { useState } from 'react';
import classNames from 'classnames';

import NftsList from '@/containers/NftsList';
import MyOffers from '@/containers/MyOffers';

import { dataTabs, EKeyTab } from './MyNft.data';
import './MyNft.scss';

const MyNft = () => {
  const [keyTab, setKeyTab] = useState(EKeyTab.MY_NFTS);

  const handleChangeKeyTab = (changedKey) => {
    setKeyTab(changedKey);
  };

  return (
    <div className="MyNft">
      <div className="container">
        <div className="MyNft-wrapper">
          <div className="MyNft-tabs flex flex-wrap">
            {dataTabs.map((item) => (
              <div
                key={item.value}
                className={classNames('MyNft-tabs-item', { active: keyTab === item.value })}
                onClick={() => handleChangeKeyTab(item.value)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="MyNft-main">
        {keyTab === EKeyTab.MY_NFTS && <NftsList isOwn />}
        {keyTab === EKeyTab.FAVORITED && <NftsList />}
        {keyTab === EKeyTab.OFFERS && <MyOffers />}
      </div>
    </div>
  );
};

export default MyNft;
