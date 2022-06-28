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
          <div className="Teams-title">AMBASSADORS</div>
          <div className="Teams-description">
            OUR TEAM We cooperate between experienced professors who are experts in blockchain, gaming studios,
            e-commerce associates, finance. And dynamic young members who adapt quickly to technology and experience in
            the fitness & healthy lifestyle field.
          </div>

          <div className="Teams-carousel">
            <Carousels
              dots={false}
              arrows
              slidesToShow={4}
              slidesToScroll={2}
              rows={2}
              infinite={false}
              responsive={[
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
              ]}
            >
              {[...dataTeams, ...dataTeams].map((item, index) => (
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
