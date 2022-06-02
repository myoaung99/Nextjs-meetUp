import React from "react";
import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "First meet up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/1920px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg",
    address: "Some street 33, xxx City",
    description: "This is first meet up",
  },
  {
    id: "m2",
    title: "Second meet up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/1920px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg",
    address: "Some street 13, xxx City",
    description: "This is second meet up",
  },
];

const HomePage = (props) => {
  console.log(props.meetups);

  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// static generation
export const getStaticProps = () => {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUP,
    },
  };
};

export default HomePage;
