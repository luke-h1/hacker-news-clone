import { GlobalStyle } from '../src/styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle /> 
  <Component {...pageProps} /> 
  </>
  )
}

export default MyApp
