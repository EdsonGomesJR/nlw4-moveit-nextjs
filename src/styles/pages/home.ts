

import styled from 'styled-components';

export const Container = styled.div`

width: 100vw;
height: 100vh;
background: var(--blue);
display: flex;

@media screen and (max-width: 1024px) {
 display: flex;
align-items: center;
justify-content:center;


  }



`;

export const Content = styled.div`


flex: 1;
display: grid;
grid-template-columns: 1fr 1fr;




@media screen and (max-width: 1024px) {
display: flex;
flex-direction: column;
margin: 10px;
}

@media screen and (min-width: 320px){

  width: 100%;
    display: flex;
  align-items: center;
  justify-content:center;
}



`;
export const HeroImage = styled.div`

display: flex;
margin-top: 5rem;

img{

  max-width: 90%;
  max-height: 90%;


}

@media screen and (max-width: 1024px) {
display: none;
}

`;


export const LoginContainer = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content:center;
margin-left: 7.5rem;

svg{
  width:360px;
  height: 76px;
}

strong{ 
  margin-top: 6rem;
  font-size: 2.25rem;
  color: var(--white);
  font-weight: 600;
  margin-bottom: 1.5rem;

}

div {
display: flex;
width: 360px;
margin-bottom: 2.5rem;


  p{
    margin-left: 1.6rem;
    font-size: 1.25rem;
    line-height: 1.875rem;
    font-weight: 500;
    color: var(--text-highlight);
  }

}

form {
  display: flex;

input {
  width: 22.6rem;
  height: 5rem;
  padding: 0.5rem;
  background: linear-gradient(90deg, #4953B8 0%, rgba(73, 83, 184, 0.2) 100%);
  border: 0;
  border-radius: 5px 0px 0px 5px;
  color: var(--text-highlight);
  outline: 0;
  
  &::placeholder{
      color: var(--text-highlight);
  }

  

}

button{
  display: flex;
  align-items: center;
  justify-content:center;
  margin-left:0px;
  width: 5rem;
  height: 5rem;
  background: var(--green);
  border-radius: 0px 5px 5px 0px;
  border:0;
  transition: background-color 0.2s;

  &:hover{
    opacity: 0.9;
  }

  svg{
    width: 1.5rem;
    height: 1.5rem;
    color: var(--white);
  }

  &:disabled{
    cursor: not-allowed;
   background: var(--blue-dark);

  }
}
}

@media screen and (max-width: 1024px) {
  display: flex;
  align-items: center;
  justify-content:center;
  margin-left:0;
}

@media screen and (min-width: 320px){
  display: flex;
  align-items: center;
  justify-content:center;
  svg {
    width: 90%;
  
  }

  strong {
    margin-top: 4rem;

  }

  div {
  display: flex;
  width: 85%;
  margin-bottom: 2.5rem;

}
 form { 
   margin-top: 2rem;
   width: 85%;

  input {
    width: 90%;
  }

 
 }


  
}




`;
