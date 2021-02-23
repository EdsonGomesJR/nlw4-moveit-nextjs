import React from 'react';

 import { Header, CurrentExperience } from './styles';

export function ExperienceBar()  {
  return (

    <Header >
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />
        <CurrentExperience  style={{left: '50%'}}>
              300 xp
          </CurrentExperience>
      </div>
      <span>600 xp</span>
    </Header>

  );
}

