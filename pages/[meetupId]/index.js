import React from "react";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import {
  getAllDocument,
  getSelectedMeetUp,
  connectDataBase,
} from "../../helper/api-util";

const MeetUpDetail = (props) => {
  const { meetup } = props;
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name="description" content={meetup.description} />
      </Head>

      <MeetupDetail
        image={meetup.image}
        title={meetup.title}
        address={meetup.address}
        description={meetup.description}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const client = await connectDataBase();
  const allMeetUps = await getAllDocument(client);

  const paths = allMeetUps.map((meetup) => {
    return {
      params: {
        meetupId: meetup.id,
      },
    };
  });

  client.close();

  return {
    fallback: "blocking",
    paths,
  };
};

export const getStaticProps = async (context) => {
  const { meetupId } = context.params;
  const client = await connectDataBase();
  const meetup = await getSelectedMeetUp(client, meetupId);

  client.close();

  return {
    props: {
      meetup,
    },
  };
};

export default MeetUpDetail;
