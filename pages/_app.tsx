/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";
import { NavBar, LinkButton } from "@Components";
import App, { AppProps } from "next/app";

export default class MyApp extends App<AppProps> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <NavBar>
          <LinkButton href="/" label="home" />
          <LinkButton href="/tela1" label="tela1" />
          <LinkButton href="/tela2" label="tela2" />
          <LinkButton href="/tela3" label="tela3" />
        </NavBar>
        <Component {...pageProps} />
      </>
    );
  }
}
