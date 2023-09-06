import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
    background-color: var(--bg-color);
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  body {
  --bg-color: #f8f9fa;
  --text-color: #121212;
  --bg-color2: white;
  --excerpt: #475467;
  --prism-default-text: #24292e;
  --bg-inline: #e9ecef;
  --darkhover: #dee2e6;
}

body.dark {
  --bg-color: #121212;
  --text-color: #ececec;
  --bg-color2: #1e1e1e;
  --excerpt: white;
  --prism-default-text: #e0e6f1;
  --bg-inline: #363636;
  --darkhover: #4d4d4d;
  color: var(--text-color);
}
`




const GlobalStyle : FunctionComponent = function() {
    return <Global  styles={defaultStyle} />
} 

export default GlobalStyle;