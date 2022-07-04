import React from 'react';
import classNames from 'classnames';

import Logo from '@/assets/images/logo.svg';
import { dataMenu } from '@/containers/Header/Header.data';
import { Link } from '@reach/router';
import { Paths } from '@/pages/routers';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer-wrapper flex justify-between flex-wrap">
          <div className="Footer-wrapper-item">
            <Link to={Paths.Home} className="Footer-logo">
              <img src={Logo} alt="" />
              GUYS.run
            </Link>
            <div className="Footer-description">©2022</div>
            <div className="Footer-description">
              Guys Run - Track fitness activity, earn crypto, and be the best version of yourself.
            </div>
          </div>
          <div className="Footer-wrapper-item">
            <div className="Footer-list flex flex-wrap">
              {dataMenu.map((item, index) => (
                <Link
                  key={index}
                  className={classNames('Footer-list-item', {
                    active: `${location.pathname}${location.hash}` === `${item.link}${item.hash}`,
                  })}
                  to={`${item.link}${item.hash}`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
