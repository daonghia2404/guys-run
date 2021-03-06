import React, { useRef } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import moment from 'moment';

import { EIconColor } from '@/components/Icon';

import './Roadmap.scss';

const Roadmap = () => {
  const currentQuater = moment().quarter();
  const currentYear = moment().year();
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    const canvas = document.querySelector('#tsparticles canvas');
    canvas.setAttribute('style', '');
  };

  const checkActiveRoadmap = (year, quater) => {
    if (year < currentYear) return true;
    if (year === currentYear && quater <= currentQuater) return true;
    return false;
  };

  return (
    <section className="Roadmap section" id="roadmap">
      <div className="container">
        <div className="Roadmap-bg">
          <Particles
            fullscreen={false}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: 'transparent',
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: 'push',
                  },
                  onHover: {
                    enable: true,
                    mode: 'repulse',
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: EIconColor.WHITE,
                },
                links: {
                  color: EIconColor.WHITE,
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: 'none',
                  enable: true,
                  outModes: {
                    default: 'bounce',
                  },
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: 'circle',
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              fullscreen: { enable: false, zIndex: 0 },
              detectRetina: true,
            }}
          />
        </div>
        <div className="Roadmap-wrapper">
          <div className="Roadmap-title">Road Map</div>

          {/* Timeline Horizontal  */}
          <div className="Roadmap-timeline horizontal flex items-center">
            <div className="Roadmap-timeline-line" />

            <div className="Roadmap-row">
              <div className="Roadmap-column" />
              <div className="Roadmap-column">
                <div className="Roadmap-column-circle">
                  {checkActiveRoadmap(2021, 1) && (
                    <AnimationOnScroll className="Roadmap-column-circle-center" animateIn="animate__bounceIn" />
                  )}
                </div>
              </div>
              <div className="Roadmap-column">
                <div className="Roadmap-column-subtitle">Q1-2021</div>
                <div className="Roadmap-column-title">
                  Idea Completion <br />
                  Market Research <br />
                </div>
              </div>
            </div>

            <div className="Roadmap-row">
              <div className="Roadmap-column">
                <div className="Roadmap-column-subtitle">Q2-2022</div>
                <div className="Roadmap-column-title">
                  Beta Testing <br />
                  Solo Mode <br />
                  Experience Mode <br />
                  GUYS RUN App - Alpha Testnest <br />
                  NFT Marketplace - Alpha Testnet <br />
                </div>
              </div>
              <div className="Roadmap-column">
                <div className="Roadmap-column-circle">
                  {checkActiveRoadmap(2022, 2) && (
                    <AnimationOnScroll className="Roadmap-column-circle-center" animateIn="animate__bounceIn" />
                  )}
                </div>
              </div>
              <div className="Roadmap-column" />
            </div>

            <div className="Roadmap-row">
              <div className="Roadmap-column" />
              <div className="Roadmap-column">
                <div className="Roadmap-column-circle">
                  {checkActiveRoadmap(2022, 3) && (
                    <AnimationOnScroll className="Roadmap-column-circle-center" animateIn="animate__bounceIn" />
                  )}
                </div>
              </div>
              <div className="Roadmap-column">
                <div className="Roadmap-column-subtitle">Q3-2022</div>
                <div className="Roadmap-column-title">
                  Partnerships & Global Marketing <br />
                  GUYS Token Smartcontract And Audit <br />
                  IEO/IDO <br />
                  NFT Marketplace Official Version Release <br />
                  Sneaker Collections Release <br />
                  Official Launch <br />
                  Team Mode & Challenge <br />
                  Staking Pool <br />
                  Event Mode <br />
                  Rental Market <br />
                  Check-in System V1 <br />
                  Upgrades of Sneaker Attributes <br />
                  Achievement System <br />
                  Multichain Support/L2 <br />
                </div>
              </div>
            </div>

            <div className="Roadmap-row">
              <div className="Roadmap-column">
                <div className="Roadmap-column-subtitle">Q4-2022</div>
                <div className="Roadmap-column-title">
                  Check-in System V2 <br />
                  Marathon Running Event <br />
                  in Marina Beach, Dubai <br />
                  Smartwatch App - Beta brr
                  <br />
                </div>
              </div>
              <div className="Roadmap-column">
                <div className="Roadmap-column-circle">
                  {checkActiveRoadmap(2022, 4) && (
                    <AnimationOnScroll className="Roadmap-column-circle-center" animateIn="animate__bounceIn" />
                  )}
                </div>
              </div>
              <div className="Roadmap-column" />
            </div>

            <div className="Roadmap-row">
              <div className="Roadmap-column" />
              <div className="Roadmap-column">
                <div className="Roadmap-column-circle">
                  {checkActiveRoadmap(2023, 1) && (
                    <AnimationOnScroll className="Roadmap-column-circle-center" animateIn="animate__bounceIn" />
                  )}
                </div>
              </div>
              <div className="Roadmap-column">
                <div className="Roadmap-column-subtitle">Q1-2023</div>
                <div className="Roadmap-column-title">
                  AR Single Mode <br />
                  Customization <br />
                  Mobile App V2.0 Beta test <br />
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Vertical  */}
          <div className="Roadmap-timeline vertical">
            <div className="Roadmap-timeline-line" />
            <div className="Roadmap-row flex items-start justify-center">
              <div className="Roadmap-column" />
              <div className="Roadmap-column">
                <div className="Roadmap-column-circle">
                  {checkActiveRoadmap(2021, 1) && (
                    <AnimationOnScroll className="Roadmap-column-circle-center" animateIn="animate__bounceIn" />
                  )}
                </div>
              </div>
              <div className="Roadmap-column">
                <div className="Roadmap-column-subtitle">Q1-2021</div>
                <div className="Roadmap-column-title">
                  Idea Completion <br />
                  Market Research <br />
                </div>
              </div>
            </div>

            <div className="Roadmap-row flex items-start justify-center">
              <div className="Roadmap-column">
                <div className="Roadmap-column-subtitle">Q2-2022</div>
                <div className="Roadmap-column-title">
                  Beta Testing <br />
                  Solo Mode <br />
                  Experience Mode <br />
                  GUYS RUN App - Alpha Testnest <br />
                  NFT Marketplace - Alpha Testnet <br />
                </div>
              </div>
              <div className="Roadmap-column">
                <div className="Roadmap-column-circle">
                  {checkActiveRoadmap(2022, 2) && (
                    <AnimationOnScroll className="Roadmap-column-circle-center" animateIn="animate__bounceIn" />
                  )}
                </div>
              </div>
              <div className="Roadmap-column" />
            </div>

            <div className="Roadmap-row flex items-start justify-center">
              <div className="Roadmap-column" />
              <div className="Roadmap-column">
                <div className="Roadmap-column-circle">
                  {checkActiveRoadmap(2022, 3) && (
                    <AnimationOnScroll className="Roadmap-column-circle-center" animateIn="animate__bounceIn" />
                  )}
                </div>
              </div>
              <div className="Roadmap-column">
                <div className="Roadmap-column-subtitle">Q3-2022</div>
                <div className="Roadmap-column-title">
                  Partnerships & Global Marketing <br />
                  GUYS Token Smartcontract And Audit <br />
                  IEO/IDO <br />
                  NFT Marketplace Official Version Release <br />
                  Sneaker Collections Release <br />
                  Official Launch <br />
                  Team Mode & Challenge <br />
                  Staking Pool <br />
                  Event Mode <br />
                  Rental Market <br />
                  Check-in System V1 <br />
                  Upgrades of Sneaker Attributes <br />
                  Achievement System <br />
                  Multichain Support/L2 <br />
                </div>
              </div>
            </div>

            <div className="Roadmap-row flex items-start justify-center">
              <div className="Roadmap-column">
                <div className="Roadmap-column-subtitle">Q4-2022</div>
                <div className="Roadmap-column-title">
                  Check-in System V2 <br />
                  Marathon Running Event <br />
                  in Marina Beach, Dubai <br />
                  Smartwatch App - Beta <br />
                </div>
              </div>
              <div className="Roadmap-column">
                <div className="Roadmap-column-circle">
                  {checkActiveRoadmap(2022, 4) && (
                    <AnimationOnScroll className="Roadmap-column-circle-center" animateIn="animate__bounceIn" />
                  )}
                </div>
              </div>
              <div className="Roadmap-column" />
            </div>

            <div className="Roadmap-row flex items-start justify-center">
              <div className="Roadmap-column" />
              <div className="Roadmap-column">
                <div className="Roadmap-column-circle">
                  {checkActiveRoadmap(2023, 1) && (
                    <AnimationOnScroll className="Roadmap-column-circle-center" animateIn="animate__bounceIn" />
                  )}
                </div>
              </div>
              <div className="Roadmap-column">
                <div className="Roadmap-column-subtitle">Q1-2023</div>
                <div className="Roadmap-column-title">
                  AR Single Mode <br />
                  Customization <br />
                  Mobile App V2.0 Beta test <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
