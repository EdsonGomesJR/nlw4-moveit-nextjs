

import styled, {css} from 'styled-components';

export const AppSideBar = styled.aside`
  position: fixed;
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

@media screen and (min-width: 320px) and (max-width: 1200px){
position: relative;
height: auto;
display: flex;
flex-direction: row;
justify-content:space-between;
align-items: center;
padding-left: 2rem;
padding-top: 0;



}



`;
export const MidIcons = styled.div`
width: 112px;
display: flex;
flex-direction: column;
margin-bottom: 70px;
align-items: center;
justify-content: center;

@media screen and (min-width: 320px) and (max-width: 1200px){
flex-direction: row;
margin-bottom: 0;
width: 70%;


}


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
margin-right: 1rem;

@media screen and (min-width: 320px) and (max-width: 1200px) {
width: 30%;
border: 0;
margin-bottom:0;
border-radius: 0;


${props => props.isChallengePage && css`
    padding-top: 4px;
    border-bottom: 4px solid var(--blue);
   
    svg{
       color: var(--blue);
    }

`}

${props => props.isLeaderBordPage && css`
    padding-top: 4px;
    border-bottom: 4px solid var(--blue);
    svg{
       color: var(--blue);
    }

`}

}
 &:hover{
    padding-right: 4px;
    border-left: 4px solid var(--blue);
    border-radius: 0px 5px 5px 0px;
    
    @media screen and (min-width: 320px) and (max-width: 1200px) {
    border-left: 0;
 
    border-bottom: 4px solid var(--blue);
    border-radius: 0;


    }
 
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








 
