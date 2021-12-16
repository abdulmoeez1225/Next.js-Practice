import React from "react";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();

  return data;
};

const dashboardSwr = () => {
  const { data, error } = useSWR("/dashboard", fetcher);

  if (error) return "An error has occured";
  if (!data) return "Loading...";
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {data.post}</h2>
      <h2>Likes - {data.like}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  );
};

export default dashboardSwr;
