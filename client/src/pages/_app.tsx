import { AppProps } from 'next/app'
import { AuthLoader } from '../components/AuthLoader'
import { AuthProvider } from '../components/providers/AuthProvider'
import { HttpClientProvider } from '../components/providers/HttpClientProvider/HttpClientProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return <AuthProvider>
    <AuthLoader>
      <HttpClientProvider>
        <Component {...pageProps} />
      </HttpClientProvider>
    </AuthLoader>
  </AuthProvider>
}

export default MyApp
