import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

import { connectDataBase, getAllDocument } from "../helper/api-util";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>NextJs MeetUps</title>
        <meta
          name="description"
          content="Find the socializing meetups in one place."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// static generation
export const getStaticProps = async () => {
  const client = await connectDataBase();

  const sorting = { _id: -1 };
  const document = await getAllDocument(client, sorting);
  client.close();

  return { props: { meetups: document }, revalidate: 1 };
};

export default HomePage;
