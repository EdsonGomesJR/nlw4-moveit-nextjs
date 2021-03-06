import styled, { css }from 'styled-components';

export const Container = styled.div`
display: flex;
width: 1200px;
height: 630px;
margin: 50px 200px 50px 200px;
`;

interface ImageContainerProps {
  hasTwoDigits?: boolean;
}

export const GridContainer = styled.div`

display:grid;
width: 100%;
height: 100%;
grid-template-columns:1fr 1fr;
grid-template-rows: 1fr;
background: var(--white);

`;

export const ImageContainer = styled.div<ImageContainerProps>`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
text-align: center;

div{
  display: flex;
  align-items: center;
  justify-content:center;
  width: 320px;
  height: 150px;
 
  font-size: 12rem;
  font-weight: 600;
  color: var(--blue);
  background: url("/icons/levelup.svg") no-repeat center;
  background-size: contain;
  text-shadow: 0px 8px 8px var(--text-highlight);
}

  ${props => props.hasTwoDigits && css`
  
    div{
        width: 620px;
        height: 210px;  
    }

  
  `}

  p {
  
    text-align: center;
    color: var(--title);
    font-size: 4rem;
    font-weight: 600;
    line-height: 4.125rem;
    white-space: pre-line;


    }

`;


export const Summary = styled.div`
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;

img {

  margin-top: 3.25rem;
}

`;