import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:flex-start;

header {
  width: 100%;
  text-transform: uppercase;
  color: var(--text);
  font-size: 1.5rem;
  font-weight:bold;
  opacity: 0.8;
  line-height: 1.4;
  margin-bottom: 0.5rem;
}
div{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 2.5rem;
  

  span {
    margin-right: 0.5rem;
    color: var(--blue);

  }
  
}
`;


export const Border = styled.div`
width: 100%;
height: 2px;
background: var(--gray-line);
margin-top: 2rem;
margin-bottom: 2rem;
`;
