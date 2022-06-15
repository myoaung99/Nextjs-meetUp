import React, { useContext } from "react";
import NewMeetUpForm from "./../../components/meetups/NewMeetupForm";
import "react-toastify/dist/ReactToastify.css";
import NotificationContext from "../../store/noti-context";
import Head from "next/head";

const NewMeetUpPage = () => {
  const notiCtx = useContext(NotificationContext);
  // prop lifting function
  const addMeetUpHandler = (meetupData) => {
    // notification
    notiCtx.showNotification({
      title: "Creating...",
      message: "Creating a new meetup in database",
      status: "pending",
    });
    fetch("/api/meetups/add-meetup", {
      method: "POST",
      body: JSON.stringify({ data: meetupData }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(response.statusText || "Something went wrong.");
      })
      .then((data) => {
        notiCtx.showNotification({
          title: "Successfully created!!!",
          message: "Successfully created a new meetup in database",
          status: "success",
        });
      })
      .catch((error) => {
        notiCtx.showNotification({
          title: "Something went wrong!!!",
          message: error.message,
          status: "error",
        });
      });
  };

  return (
    <>
      <Head>
        <title>Add New MeetUp</title>
        <meta name="description" content="Creat a new meetup for all people" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
    </>
  );
};

export default NewMeetUpPage;
