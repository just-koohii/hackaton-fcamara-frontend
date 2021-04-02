import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { NavBar } from '@components';
import theme from '../src/theme';
import '../styles/globals.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />

          <title>Elo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <main>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </>
    );
  }
}
