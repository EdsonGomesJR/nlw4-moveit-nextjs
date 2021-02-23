

import { ProfileContainer } from './styles';
export function Profile() {
  
  return (
    <ProfileContainer>
      <img src="https://github.com/edsongomesjr.png" alt="Edson Gomes" />
      <div>
        <strong>Edson Gomes</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 999
        </p>
      </div>
    </ProfileContainer>
  );
}