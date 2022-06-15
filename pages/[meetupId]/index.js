import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import {
  getAllDocument,
  getSelectedMeetUp,
  connectDataBase,
} from "../../helper/api-util";

const MeetUpDetail = (props) => {
  const { meetup } = props;
  return (
    <MeetupDetail
      image={meetup.image}
      title={meetup.title}
      address={meetup.address}
      description={meetup.description}
    />
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
    fallback: false,
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
