import { ProtectedLayout } from '../components/layouts/protected';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

// add requireAuth to AppProps
type AppPropsWithAuth = AppProps & {
  Component: {
    requireAuth?: boolean;
  };
};

export default function App({ Component, pageProps }: AppPropsWithAuth) {
  return Component.requireAuth ? (
    <ProtectedLayout>
      <Component {...pageProps} />
    </ProtectedLayout>
  ) : (
    <Component {...pageProps} />
  );
}
