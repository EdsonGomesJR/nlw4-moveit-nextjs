
import styled from 'styled-components';
import Popup from 'reactjs-popup';

export const StyledPopUp = styled(Popup)`

&-overlay {
 backdrop-filter: blur(1px);
 background: rgba(242, 243, 245, 0.8);
 outline: 0;
 
}

&-content {
width: 26.467rem;
height: 24.267rem;
padding: 0.5rem;
background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%);
box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
border: 0px;
border-radius: 5px;
 
.modal {
  font-size: 12px;
}



.modal > .content {
  width: 100%;
  padding: 10px 5px;
}

.modal > .actions {
  width: 100%;
  padding: 10px 5px;
  margin: auto;
  text-align: center;
}
.modal > .close {
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -10px;
  top: -10px;
  font-size: 24px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #cfcece;
  outline: 0;
  
}
}

`;
