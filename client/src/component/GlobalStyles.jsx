import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}
:root {
  --default-font-color: #FF6A6A;
  --stronger-font-color: #CC5454;
  /* background: linear-gradient(to right, rgb(221, 214, 243), rgb(250, 172, 168)) no-repeat center center fixed; */
  background: linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%) no-repeat center center fixed;


}
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;

  color: black;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
  
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/

/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  color: 	#FF6A6A;
  overflow-wrap: break-word;
  
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`;
