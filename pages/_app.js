import Footer from "../components/Footer";
import "../styles/globals.css";
import { createClient, Provider } from "urql";
import Head from "next/head";

const client = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_URL || "https://app.ckdr.co.in/graphql",
});

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Provider value={client}>
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
