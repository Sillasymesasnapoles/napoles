import { AppProps } from 'next/app';
import Head from 'next/head'; // Importa Head para los metadatos globales
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Sillas y mesas Nápoles</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Sillas y mesas Nápoles" />
        <meta
          property="og:description"
          content="Renta de sillas (Canes) y Mesas (Lifetime)."
        />
        <meta
          property="og:image"
          content="https://sillas-napoles.vercel.app/assets/head/agenda.png"
        />
        <meta property="og:url" content="https://sillas-napoles.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
