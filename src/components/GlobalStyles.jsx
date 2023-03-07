import { injectGlobal } from '@emotion/css';
import 'modern-normalize';

export const GlobalStyles = () => injectGlobal`
   body {
    background-image: url('https://images.unsplash.com/photo-1611416517780-eff3a13b0359?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80');
    background-size: auto 100vh;
    background-repeat: no-repeat;

    background: url('https://images.unsplash.com/photo-1611416517780-eff3a13b0359?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80') no-repeat center fixed ;
    
    display:flex;
    justify-content: center;
    padding: 50px 30px;
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
