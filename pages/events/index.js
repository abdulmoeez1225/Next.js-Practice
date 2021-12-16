import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";

const index = ({ eventsList }) => {
  const router = useRouter();

  const [events, setEvents] = useState(eventsList);
  const fetchSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();
    setEvents(data);

    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h2>List of events</h2>
      {events.map((event, index) => {
        return (
          <div key={index}>
            <h2>
              {event.title} {event.date} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default index;

export const getServerSideProps = async (ctx) => {
  const { query } = ctx;
  const { category } = query;
  const querystring = category ? `?category=${category}` : "";
  const response = await fetch(`http://localhost:4000/events?${querystring}`);
  const data = await response.json();
  return {
    props: { eventsList: data },
  };
};
