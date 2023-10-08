import "../scss/style.scss";
import LayoutMain from "../../components/layouts/layout.main";
import type { AppProps } from "next/app";
import ContextCheckout from "../../components/context/context.checkout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextCheckout>
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    </ContextCheckout>
  );
}
