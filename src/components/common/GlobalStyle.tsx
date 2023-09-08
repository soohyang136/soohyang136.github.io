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
  --bg-color: white;
  --text-color: #121212;
  --text-color2: #495057;
  --text-color3: #868e96;
  --bg-color2: white;
  --bg-tag: #F8F9FA;
  --excerpt: #475467;
  --prism-default-text: #24292e;
  --bg-inline: #e9ecef;
  --darkhover: #dee2e6;
  --bottom-line: #E9ECEF;
  --border: #343a40;
}

body.dark {
  --bg-color: #121212;
  --text-color: #ececec;
  --text-color2: #D9D9D9;
  --text-color3: #ACACAC;
  --bg-color2: #1e1e1e;
  --bg-tag: #252525;
  --excerpt: white;
  --prism-default-text: #e0e6f1;
  --bg-inline: #363636;
  --darkhover: #4d4d4d;
  --bottom-line: #252525;
  --border: #E0E0E0;
  color: var(--text-color);
}
`




const GlobalStyle : FunctionComponent = function() {
    return <Global  styles={defaultStyle} />
} 

export default GlobalStyle;