import "../styles/globals.css";
import React from "react";
import Layout from "./../components/layout/Layout";
import Head from "next/head";
import { NotificationProvider } from "../store/noti-context";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <Layout>
        <Head>
          <title>NextJs MeetUps</title>
          <meta name="description" content="NextJS Events" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationProvider>
  );
}

export default MyApp;
