import { createGlobalStyle } from 'styled-components'

import LatoRegular from './LatoRegular.ttf'
import LatoLight from './LatoLight.ttf'
import LatoBold from './LatoBold.ttf'
import DancingScriptBold from './DancingScriptBold.ttf'

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Lato Regular';
    src: local('Lato Regular'), local('LatoRegular'), url(${LatoRegular});
    font-display: fallback;
  }
  @font-face {
    font-family: 'Lato Light';
    src: local('Lato Light'), local('LatoLight'), url(${LatoLight});
    font-display: fallback;
  }
  @font-face {
    font-family: 'Lato Bold';
    src: local('Lato Bold'), local('LatoBold'), url(${LatoBold});
    font-display: fallback;
  }
  @font-face {
    font-family: 'Dancing Script Bold';
    src: local('Dancing Script Bold'), local('DancingScriptBold'), url(${DancingScriptBold});
    font-display: fallback;
  }
  body {
    font-family: Lato Regular;
  }
  h4 {
    font-size: 20px;
  }
  button {
    font-size: 15px;
    font-family: Lato Bold;
    padding: 15px 20px;
    border: none;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.8;
  }

  @media (min-width: 600px) {
    body {
      font-size: 25px;
    }
    h1 {
      font-size: 60px;
    }
    h2 {
      font-size: 40px;
    }
    h3 {
      font-size: 30px;
    }
  }
  
  @media (max-width: 600px) {
    body {
      font-size: 20px;
    }
    h1 {
      font-size: 50px;
    }
    h2 {
      font-size: 30px;
    }
    h3 {
      font-size: 25px;
    }
  }
`
