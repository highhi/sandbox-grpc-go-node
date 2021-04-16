import { AppProps } from 'next/app'
import { AuthLoader } from '../components/AuthLoader'
import { AuthProvider } from '../components/providers/AuthProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return <AuthProvider>
    <AuthLoader>
      <Component {...pageProps} />
    </AuthLoader>
  </AuthProvider>
}

export default MyApp
