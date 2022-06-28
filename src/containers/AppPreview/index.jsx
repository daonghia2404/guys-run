import React from 'react';

import ImageAppPreview from '@/assets/images/image-app-preview.png';
import ImageAppPreviewMobile from '@/assets/images/image-app-preview-mb.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import './AppPreview.scss';

const AppPreview = () => {
  return (
    <div className="AppPreview">
      <div className="AppPreview-wrapper">
        <div className="Systems-title">App Preview</div>

        <AnimationOnScroll animateIn="animate__fadeInUp">
          <div className="AppPreview-image">
            <img className="desktop" src={ImageAppPreview} alt="" />
            <img className="mobile" src={ImageAppPreviewMobile} alt="" />
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default AppPreview;
