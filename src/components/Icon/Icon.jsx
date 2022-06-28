import React from 'react';
import classNames from 'classnames';

import { EIconName } from './Icon.enums';
import './Icon.scss';

import Menu from './Menu';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import AngleLeft from './AngleLeft';
import AngleRight from './AngleRight';
import Pancake from './Pancake';
import Uniswap from './Uniswap';
import Copy from './Copy';
import ArrowLongRight from './ArrowLongRight';
import Diamond from './Diamond';
import Ticket from './Ticket';
import Shield from './Shield';
import Global from './Global';
import Coin from './Coin';
import ChevronDown from './ChevronDown';
import ButtonToTop from './ButtonToTop';
import Heart from './Heart';
import HeartOutline from './HeartOutline';
import Close from './Close';
import Loaded from './Loaded';
import Loading from './Loading';

const Icon = ({ name, className, color, onClick }) => {
  const renderIcon = () => {
    switch (name) {
      case EIconName.Menu:
        return <Menu color={color} />;
      case EIconName.ArrowLeft:
        return <ArrowLeft color={color} />;
      case EIconName.ArrowRight:
        return <ArrowRight color={color} />;
      case EIconName.AngleLeft:
        return <AngleLeft color={color} />;
      case EIconName.AngleRight:
        return <AngleRight color={color} />;
      case EIconName.Pancake:
        return <Pancake color={color} />;
      case EIconName.Uniswap:
        return <Uniswap color={color} />;
      case EIconName.Copy:
        return <Copy color={color} />;
      case EIconName.ArrowLongRight:
        return <ArrowLongRight color={color} />;
      case EIconName.Diamond:
        return <Diamond color={color} />;
      case EIconName.Ticket:
        return <Ticket color={color} />;
      case EIconName.Shield:
        return <Shield color={color} />;
      case EIconName.Global:
        return <Global color={color} />;
      case EIconName.Coin:
        return <Coin color={color} />;
      case EIconName.ChevronDown:
        return <ChevronDown color={color} />;
      case EIconName.ButtonToTop:
        return <ButtonToTop color={color} />;
      case EIconName.Heart:
        return <Heart color={color} />;
      case EIconName.HeartOutline:
        return <HeartOutline color={color} />;
      case EIconName.Close:
        return <Close color={color} />;
      case EIconName.Loaded:
        return <Loaded color={color} />;
      case EIconName.Loading:
        return <Loading color={color} />;

      default:
        return <></>;
    }
  };

  return (
    <div className={classNames('Icon', 'flex', 'justify-center', 'items-center', className)} onClick={onClick}>
      {renderIcon()}
    </div>
  );
};

export default Icon;
