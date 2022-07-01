import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Carousels from '@/components/Carousels';

import { dataTeams } from './Teams.data';

import './Teams.scss';

const Teams = () => {
  return (
    <section className="Teams section" id="team">
      <div className="container">
        <div className="Teams-wrapper">
          <div className="Teams-title">GUYS TEAM</div>

          <div className="Teams-carousel">
            <Carousels
              dots={false}
              arrows
              slidesToShow={4}
              slidesToScroll={2}
              infinite={false}
              responsive={[
                {
                  breakpoint: 991,
                  settings: {
                    rows: 1,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 575,
                  settings: {
                    rows: 2,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
              ]}
            >
              {dataTeams.map((item, index) => (
                <AnimationOnScroll key={index} animateIn="animate__fadeInUp" delay={(index * 1000) / 4}>
                  <div className="Teams-carousel-item">
                    <div className="Teams-carousel-item-card">
                      <div className="Teams-carousel-item-card-image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="Teams-carousel-item-card-name">{item.name}</div>
                      <div className="Teams-carousel-item-card-subtitle">{item.subtitle}</div>
                      <div className="Teams-carousel-item-card-description">{item.description}</div>
                    </div>
                  </div>
                </AnimationOnScroll>
              ))}
            </Carousels>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
