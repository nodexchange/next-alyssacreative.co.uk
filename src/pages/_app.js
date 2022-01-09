import '../styles/globals.css'

import { BasicLayout } from '../layouts/Basic'

function MyApp({ Component, pageProps }) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  )
}

export default MyApp


