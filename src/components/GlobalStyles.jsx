import { injectGlobal } from '@emotion/css';
import 'modern-normalize';

export const GlobalStyles = () => injectGlobal`
   body {
    background: linear-gradient(90deg, rgba(31,3,3,1) 0%, rgba(3,67,79,1) 50%, rgba(2,142,114,1) 100%);
    margin: 0;
    font-family: monospace,
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
`;
