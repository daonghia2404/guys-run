import React from 'react';

import ProjectBackers from '@/containers/ProjectBackers';
// import ProjectCommunities from '@/containers/ProjectCommunities';
import Documents from '@/containers/Documents';
import Join from '@/containers/Join';
import Teams from '@/containers/Teams';
import HotTopic from '@/containers/HotTopic';
import GamePlay from '@/containers/GamePlay';
import Roadmap from '@/containers/Roadmap';
import Systems from '@/containers/Systems';
import Workouts from '@/containers/Workouts';
import AppPreview from '@/containers/AppPreview';

const Home = () => {
  return (
    <div className="Home">
      <Workouts />
      <AppPreview />
      <GamePlay />
      <Systems />
      <Roadmap />
      <Teams />
      <ProjectBackers />
      {/* <ProjectCommunities /> */}
      <Documents />
      <Join />
      <HotTopic />
    </div>
  );
};

export default Home;
