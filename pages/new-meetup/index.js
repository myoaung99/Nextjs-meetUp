import React from "react";
import NewMeetUpForm from "./../../components/meetups/NewMeetupForm";

const NewMeetUpPage = () => {
  // prop lifting function
  const addMeetUpHandler = (meetupData) => {
    // notification

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
        // notification
      })
      .catch((error) => {
        // notification
      });
  };

  return (
    <>
      <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
    </>
  );
};

export default NewMeetUpPage;
