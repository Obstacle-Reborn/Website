import { createGlobalStyle } from "styled-components";

import LatoLight from "src/assets/fonts/Lato-Light.ttf";
import LatoRegular from "src/assets/fonts/Lato-Regular.ttf";
import LatoBold from "src/assets/fonts/Lato-Bold.ttf";
import LatoBoldItalic from "src/assets/fonts/Lato-BoldItalic.ttf";
import LatoItalic from "src/assets/fonts/Lato-Italic.ttf";
import forkawesomeManiaicons from "src/assets/fonts/forkawesome-maniaicons.woff2";
import KenneyIcons from "src/assets/fonts/kenney-icon-font.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: "Lato Light";
    src: local("Lato Light"), url(${LatoLight}) format(truetype);
  }
  @font-face {
    font-family: "Lato Regular";
    src: local("Lato Regular"), url(${LatoRegular}) format(truetype);
  }
  @font-face {
    font-family: "Lato Bold";
    src: local("Lato Bold"), url(${LatoBold}) format(truetype);
  }
  @font-face {
    font-family: "Lato BoldItalic";
    src: local("Lato BoldItalic"), url(${LatoBoldItalic}) format(truetype);
  }
  @font-face {
    font-family: "Lato Italic";
    src: local("Lato Italic"), url(${LatoItalic}) format(truetype);
  }
  @font-face {
    font-family: "ForkAwesome";
    src: local("ForkAwesome"), url(${forkawesomeManiaicons}) format(woff2);
  }
  @font-face {
    font-family: "KenneyIcons";
    src: local("KenneyIcons"), url(${KenneyIcons}) format(truetype);
  } 
`;