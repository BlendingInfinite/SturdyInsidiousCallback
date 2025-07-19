import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { FaustProvider } from "@faustwp/core";
import "../../faust.config";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <Component {...pageProps} key={router.asPath} />
    </FaustProvider>
  );
}
export default MyApp;
