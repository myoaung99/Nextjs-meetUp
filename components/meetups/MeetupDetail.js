import React from "react";
import { useRouter } from "next/dist/client/router";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  const router = useRouter();

  const meetupId = router.query.meetupId;

  return (
    <div className={classes.detail}>
      <p>{meetupId}</p>
      <img src={props.image} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </div>
  );
};

export default MeetupDetail;
