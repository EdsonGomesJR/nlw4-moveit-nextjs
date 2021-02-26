import styled from 'styled-components';


// export const Container = styled.div`
//   height: 100vh;
//   max-width: 992px;
//   margin: 0 auto;
//   padding: 2.5rem 2rem;

//   display: flex;
//   flex-direction: column;
// `;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
 span {
  font-size: 1rem;
}

> div {
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;
}

> div > div {
  height: 4px;
  border-radius: 4px;
  background: linear-gradient(90deg, rgba(76,214,43,1) 30%, rgba(7,233,212,1) 60%,
   rgba(43,190,214,1) 90%);
 

}`

export const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);

`;