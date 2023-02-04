import '../styles/globals.css'
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client'
import Head from 'next/head'

function MyApp({ Component, pageProps }) { 
  return (
    <div>
      <Head>
        <title>Lens App</title>
        <meta name="description" content="Lens App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>    
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
