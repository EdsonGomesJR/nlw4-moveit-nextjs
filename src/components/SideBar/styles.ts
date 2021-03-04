

import styled, {css} from 'styled-components';

export const AppSideBar = styled.aside`
  position: absolute;
  height: 100%;
  padding-top: 2rem;
  background: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

   img {
  width: 48px;
}

footer a,
 footer button {
  width: 48px;
  height: 48px;

  border: 0;

  background: #12afcb;
  border-radius: 16px;

  cursor: pointer;

  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;
}

 footer a:hover,
 footer button:hover {
  background: #17d6eb;
}

`;
export const MidIcons = styled.div`
width: 112px;
display: flex;
flex-direction: column;
margin-bottom: 70px;
align-items: center;
justify-content: center;

`;

interface ButtonProps {
  isChallengePage?: boolean;
  isLeaderBordPage?: boolean;
}

export const NavButtons = styled.button<ButtonProps>`

width: 112px;
border: 0;
background: transparent;
height: 56px;
outline: 0;
margin-bottom: 10px;

 &:hover{
    padding-right: 4px;
    border-left: 4px solid var(--blue);
    border-radius: 0px 5px 5px 0px;
    
 
  }
 svg {
  width: 2rem;
  height: 2rem;
  color: var(--text);


&:hover{
 
  color: var(--blue);

}
 }

${props => props.isChallengePage && css`
    padding-right: 4px;
    border-left: 4px solid var(--blue);
    border-radius: 0px 5px 5px 0px;
    svg{
       color: var(--blue);
    }

`}

${props => props.isLeaderBordPage && css`
    padding-right: 4px;
    border-left: 4px solid var(--blue);
    border-radius: 0px 5px 5px 0px;
    svg{
       color: var(--blue);
    }

`}





 
`;








 
