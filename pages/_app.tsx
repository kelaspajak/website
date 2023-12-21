/* eslint-disable react/no-children-prop */
import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';
import { PrimitivesDocsPage } from '@components/PrimitivesDocsPage';
import { useAnalytics } from '@lib/analytics';
import { CssLibPreferenceProvider } from '@components/CssLibPreference';
import { SyntaxSchemeProvider } from '@components/Pre';
import { Favicon } from '@components/Favicon';
import '@radix-ui/themes/styles.css';
import './styles.css';
// Supports weights 100-900
import '@fontsource-variable/inter';
// Supports weights 400-900 untuk Serif Heading
import '@fontsource-variable/alegreya';
// Supports weights 100-800
import '@fontsource-variable/jetbrains-mono';

function Pages({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.startsWith('/primitives/docs')) {
    return (
      <Theme accentColor="blue" grayColor="slate" className="radix-themes-custom-fonts">
        <SyntaxSchemeProvider scheme="blue">
          <PrimitivesDocsPage>
            <Favicon />
            <Component {...pageProps} />
          </PrimitivesDocsPage>
        </SyntaxSchemeProvider>
      </Theme>
    );
  }

  // pakai theme
  // if (router.pathname.startsWith('/primitives')) {
  //   return (
  //     <Theme accentColor="blue" grayColor="slate" className="radix-themes-custom-fonts">
  //       <SyntaxSchemeProvider scheme="blue">
  //         <Favicon />
  //         <Component {...pageProps} />
  //       </SyntaxSchemeProvider>
  //     </Theme>
  //   );
  // }

  if (router.pathname.startsWith('/colors')) {
    return (
      <Theme accentColor="sky" grayColor="gray" className="radix-themes-custom-fonts">
        <Favicon />
        <Component {...pageProps} />
      </Theme>
    );
  }

  return (
    <Theme accentColor="blue" className="radix-themes-custom-fonts" grayColor="gray" radius="full">
      <SyntaxSchemeProvider scheme="blue">
        <Favicon />
        <Component {...pageProps} />
      </SyntaxSchemeProvider>
    </Theme>
  );
}

function App(props: AppProps) {
  useAnalytics();

  return (
    <CssLibPreferenceProvider>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: 'light-theme', dark: 'dark-theme' }}
        defaultTheme="system"
        // @ts-ignore
        children={<Pages {...props} />}
      />
    </CssLibPreferenceProvider>
  );
}

export default App;
