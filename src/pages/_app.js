import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import ProgressBar from "@badrap/bar-of-progress";
import { useState } from "react";
import Router from "next/router";

const progress = new ProgressBar({
  size: 3,
  color: "#DAA520",
  className: "z-50 bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const MyApp = ({ Component, pageProps }) => {
  const [progress, setProgress] = useState(0);

  return (
    <SessionProvider session={pageProps.session}>
      {/* Gives access to the authentication on the whole app */}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;

// This is v3
