import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { lightTheme } from '../themes';

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ lightTheme}>
        <CssBaseline />
      <ApolloProvider client={client}>
            <Component {...pageProps} />
      </ApolloProvider>,
    </ThemeProvider>
  )
}

export default MyApp
