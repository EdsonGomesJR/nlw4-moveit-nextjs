
import styled from 'styled-components';

export const ChallengeBoxContainer = styled.div`
height: 100%;
background: var(--white);
border-radius: 5px;
box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);


display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`;
export const ChallengeActive = styled.div`
height: 100%;
display: flex;
flex-direction: column;

div{
  padding: 1.5rem 2rem;
header {
  color: var(--blue);
  font-weight: 600;
  font-size: 1.25rem;
  padding: 0 2rem 1.5rem;
  border-bottom: 1px solid var(--gray-line);
}

main {
  padding: 1.5rem 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;

  strong{
    font-size: 2rem;
    font-weight: 600;
    color: var(--title);
    margin: 1.5rem 0 1rem;
  }

  p{ 
    line-height: 1.5;
  }
}
}


`;

export const Footer = styled.footer`
display:grid;
grid-template-columns: 1fr 1fr;
align-items: flex-end;
margin-top: 56px;
border-top: 1px solid #DCDDE0;




button {
  height: 5rem;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  /* transition: filter 0.2s; */
  transition: background-color 0.2s;

  /* faz um escurecimento no hover esse filter :hover{
    filter: brightness(0.9);
  } */

}

button + button {
  border-left: 1px solid #DCDDE0;
}

`;


export const ChallengeNotActive = styled.div`
display: flex;
flex-direction: column;
align-items: center;


strong { 
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
}

p { 
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.4;
  max-width: 70%;
  margin-top: 3rem;

  img {
    margin-bottom: 1rem;
  }
}
`;

export const ChallengeSucceededButton = styled.button`
background: #F7FFF5;
color: var(--green);
border: 0;
border-radius: 0px 0px 5px 0px;
&:hover{
  background: var(--green);
  color: var(--white);
}
`;
export const ChallengeFailedButton = styled.button`
color: var(--red);
background: #FFF5F5;
border: 0;
border-radius: 0px 0px 0px 5px;


&:hover{
  background: var(--red);
  color: var(--white);
}




`;