import "../styles/globals.css";
import React from "react";
import Layout from "./../components/layout/Layout";
import { NotificationProvider } from "../store/noti-context";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationProvider>
  );
}

export default MyApp;
