
import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 6rem;
display: grid;
grid-template-columns: 0.5fr 3.5fr 1.2fr 1fr;
margin-top: 4px;

background: var(--white);
border-radius: 5px;
`;

export const ChallengesCompleted = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;

p{
  color: var(--blue);
  margin-right: 0.2rem;
}
`;

export const UserCard = styled.div`
display: flex;
align-items: center;
margin-left: 1.5rem;


div{
  margin-left: 1rem;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1.25rem;
    color: var(--title);
  }
}

span {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img{
    width: 14px;
    height: 16px;
  }
  p{
    font-size: 1rem;
    margin-left: 0.5rem;
  }
}

img{ 
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
}


`;

export const Position = styled.div`
display: flex;
align-items: center;
justify-content:center;
border-right: 0.25rem solid var(--background);
font-size: 1.5rem;

`;

export const Xp = styled.div`

display: flex;
align-items: center;
justify-content: flex-start;


p{
  color: var(--blue);
  margin-right: 0.2rem;
}
`;
