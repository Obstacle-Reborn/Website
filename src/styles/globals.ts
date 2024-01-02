import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body, html {
    margin: 0;
    height: 100%;
    min-width: 390px;
    min-height: 390px;

    font-family: Lato, 'Trebuchet MS', sans-serif, ForkAwesome, KenneyIcons;
    color: white;
    overflow: overlay;
  }

  body {
      background-attachment: fixed;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;

      display: flex;
      flex-direction: column;
      overflow: hidden;
  }

  a {
      color: inherit;
      transition: color 0.2s;
  }

  @media only screen and (max-width: 420px) {
    html {
      zoom: 0.8;
    }
  }

  @media only screen and (max-width: 320px) {
    html {
      zoom: 0.6;
    }
  }

  @media only screen and (max-width: 870px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;