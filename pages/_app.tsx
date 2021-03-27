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
          <LinkButton href="/" label="Home" />
          <LinkButton href="/tela1" label="Cadastro" />
          <LinkButton href="/tela2" label="Doar" />
          <LinkButton href="/tela3" label="Contato" />
        </NavBar>
        <Component {...pageProps} />
      
      </>
      
    );
  }
}
