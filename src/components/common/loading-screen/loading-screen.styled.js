import styled, { keyframes } from 'styled-components';

const load8animation = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(0, 0, 0, 0.2);
  border-right: 1.1em solid rgba(0, 0, 0, 0.2);
  border-bottom: 1.1em solid rgba(0, 0, 0, 0.2);
  border-left: 1.1em solid #000;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${load8animation} 1.1s infinite linear;
  animation: ${load8animation} 1.1s infinite linear;

  border-radius: 50%;
  width: 10em;
  height: 10em;

  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
}
`




export {Loader};
