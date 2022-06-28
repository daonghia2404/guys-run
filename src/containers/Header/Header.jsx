import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import Logo from '@/assets/images/logo.svg';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { useOnClickOutside } from '@/utils/hooks';
import { copyText } from '@/utils/functions';
import { Link, navigate, useLocation } from '@reach/router';
import { Paths } from '@/pages/routers';

import { dataMenu } from './Header.data';
import './Header.scss';
import { Dropdown } from 'antd';

const Header = () => {
  const [visibleMenuMobile, setVisibleMenuMobile] = useState(false);
  const [isConnectWallet, setIsConnectWallet] = useState(false);
  const menuRef = useRef();
  const location = useLocation();

  const renderAccountDropdown = () => {
    return (
      <div className="Header-account-dropdown">
        <div className="Header-account-dropdown-text">Total balance:</div>
        <div className="Header-account-dropdown-values flex items-center justify-center">
          <Icon name={EIconName.Coin} />
          120000
        </div>

        <div className="Header-account-dropdown-logout">Log out</div>
      </div>
    );
  };

  const handleConnectWallet = () => {
    setIsConnectWallet(true);
  };

  useOnClickOutside(menuRef, () => {
    setVisibleMenuMobile(false);
  });

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        document.querySelector(location.hash)?.scrollIntoView();
      }, 300);
    }
  }, [location.hash]);

  return (
    <div className="Header">
      <div className="container">
        <div className="Header-wrapper flex items-center justify-between">
          <Link to={Paths.Home} className="Header-logo flex items-center">
            <img src={Logo} alt="" />
            GUYS.run
          </Link>
          <div ref={menuRef} className={classNames('Header-nav flex items-center', { active: visibleMenuMobile })}>
            {dataMenu.map((item, index) => (
              <Link
                key={index}
                to={`${item.link}${item.hash}`}
                className={classNames('Header-nav-item', {
                  active: `${location.pathname}${location.hash}` === `${item.link}${item.hash}`,
                })}
              >
                {item.title}
              </Link>
            ))}
            <div className="Header-nav-info">
              <div className="Header-nav-info-item">
                <div className="Header-nav-info-item-bid">
                  <div className="Header-nav-info-item-subtitle">Current bid</div>
                  <div className="Header-nav-info-item-title">$6.88</div>
                </div>
              </div>
              <div className="Header-nav-info-item">
                <div className="Header-nav-info-item-token">
                  <div className="Header-nav-info-item-subtitle">Swap GUYS token:</div>
                  <div className="Header-nav-info-item-tokens flex items-center justify-end">
                    <Icon name={EIconName.Pancake} />
                    <Icon name={EIconName.Uniswap} />
                  </div>
                </div>
              </div>
              <div className="Header-nav-info-item">
                <div className="Header-nav-info-item-contact">
                  <div className="Header-nav-info-item-subtitle">Contract Address:</div>
                  <div className="Header-nav-info-item-title flex items-center">
                    0xd6b112...8888868
                    <Icon
                      name={EIconName.Copy}
                      color={EIconColor.ELECTRIC_VIOLET}
                      onClick={() => copyText('0xd6b112...8888868')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div ref={menuRef} className="Header-actions flex items-center">
            <div
              className="Header-actions-btn mobile flex items-center justify-center"
              onClick={() => setVisibleMenuMobile(!visibleMenuMobile)}
            >
              <Icon name={EIconName.Menu} color={EIconColor.WHITE} />
            </div>
            {isConnectWallet ? (
              <>
                <div
                  className={classNames('Header-account-avatar', {
                    active: location.pathname === Paths.MyNft,
                  })}
                  onClick={() => navigate(Paths.MyNft)}
                ></div>
                <Dropdown trigger={['click']} placement="bottomRight" overlay={renderAccountDropdown()}>
                  <div className="Header-actions-btn" onClick={handleConnectWallet}>
                    0xb93866...2910
                  </div>
                </Dropdown>
              </>
            ) : (
              <div className="Header-actions-btn" onClick={handleConnectWallet}>
                Connect Wallet
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
