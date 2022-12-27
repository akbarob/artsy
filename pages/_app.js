import Layout from "../components/Layout";
import { store } from "../Redux/Store";
import { Provider, useDispatch } from "react-redux";
import "../styles/globals.css";
import { useEffect } from "react";
import { SetCart } from "../Redux/cartSlice";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
