import styled from 'styled-components';


export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  
  strong {
    font-size: 2.25rem;
    font-weight: 600;
    color: var(--title);
  }
.card-container{
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.card-container::-webkit-scrollbar{
display: none;
}
`;


export const CardHeader = styled.div`
width: 100%;
display: grid;
grid-template-columns: 0.5fr 3.5fr 1.2fr 1fr;
margin-top: 2.5rem;
margin-bottom: 1rem;

div{
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: bold;
  opacity: 0.5;
  color: var(--text);
}


 div.usuario {
   margin-left:1.5rem;
 }


`;

