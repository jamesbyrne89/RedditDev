import styled from 'styled-components';
import { constants } from '../styles/constants';

const LoaderStyles = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 3.5em;
  height: 2rem;
  color: ${constants.nearBlack};
  font-family: ${constants.sansSerif};

  font-size: 2rem;
  opacity: 0.8;
  margin: auto;
  position: absolute;
  top: 25vh;
  left: 0;
  right: 0;
  bottom: 0;
span {
  display: inline-block;
  -webkit-animation: pulse 0.4s alternate infinite ease-in-out;
  animation: pulse 0.4s alternate infinite ease-in-out;
}
span:nth-child(odd) {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
@-webkit-keyframes pulse {
  to {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.5;
  }
}
@keyframes pulse {
  to {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.5;
  }
}
`;

export default LoaderStyles;
