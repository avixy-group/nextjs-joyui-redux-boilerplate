// Fonts
import '@fontsource/public-sans';

// Next
import Head from 'next/head';

// Redux
import { wrapper } from '@/redux/store';
import { CssVarsProvider } from '@mui/joy/styles';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Joy UI
import { CssBaseline } from '@mui/joy';

// Theme
import theme from '@/configs/theme';

export default wrapper.withRedux(({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
          <CssVarsProvider defaultMode="system" theme={theme}>
            <CssBaseline />
            <Component {...props.pageProps} />
          </CssVarsProvider>
        </PersistGate>
      </Provider>
    </>
  );
});
