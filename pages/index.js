import React from "react";
import MeetupList from "../components/meetups/MeetupList";

import { connectDataBase, getAllDocument } from "../helper/api-util";

const HomePage = (props) => {
  return (
    <>
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

  return { props: { meetups: document } };
};

export default HomePage;
