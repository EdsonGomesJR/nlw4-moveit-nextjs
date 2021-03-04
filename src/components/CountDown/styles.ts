import styled, { css } from 'styled-components';

export const CountDownContainer = styled.div`

display: flex;
align-items: center;
font-family: Rajdhani;
font-weight: 600;
color: var(--title); 

> div {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;

  span {
    flex: 1;
  }
  span:first-child {
    border-right: 1px solid #f8f1f3;
  }
  span:last-child {
    border-left: 1px solid #f8f1f3;
  }
}
 > span {
   font-size: 6.25rem;
   margin: 0 0.5rem;
 }


`;

interface ButtonProps {
  isCountingDown?: boolean;
}


export const CountDownButton = styled.button<ButtonProps>`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  outline: 0;

  background: var(--blue);
  color: var(--white);
  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;
    svg {
      width: 1.11rem;
      height: 1.11rem;
      margin-left: 1rem;
      
    }

  :hover:not(:disabled) {
    background: var(--blue-dark) 

    
  } 

  :disabled{
    background: var(--white);
    color:var(--text);
    cursor: not-allowed;
    border-bottom: 4px solid var(--green);

  
    svg{
      width: 1.11rem;
      height: 1.11rem;
      margin-left: 1rem;
      color: var(--green);
    
    }
    

  
  }

  

  ${props => props.isCountingDown &&
  css`
     background: var(--white);
     color: var(--text);
     transition: background-color 0.2s;

     :hover:not(:disabled){
       color: var(--white);
       background: var(--red);
     }
  `}

 
`;

export const Border = styled.div`

    width: 100%;
    position: relative;
    bottom: 3px;
    height: 5px;
    border-radius: 0px 0px 5px 5px;
    background: var(--gray-line);

    > div {
  height: 4px;
  border-radius: 4px;
  background: var(--green);}
`;