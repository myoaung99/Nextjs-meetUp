import React from "react";
import NewMeetUpForm from "./../../components/meetups/NewMeetupForm";

const NewMeetUpPage = () => {
  const addMeetUpHandler = (meetupData) => {
    console.log(meetupData);
  };

  return (
    <>
      <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
    </>
  );
};

export default NewMeetUpPage;
