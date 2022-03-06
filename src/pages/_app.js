import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import { BasicLayout } from '../layouts/Basic'

import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BasicLayout>
          <Component {...pageProps} />
        </BasicLayout>
      </ThemeProvider>
    </>
  )
}

export default MyApp


