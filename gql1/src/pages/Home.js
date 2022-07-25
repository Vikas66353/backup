import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client/";
import { GET_WEATHER_QUERY } from "../graphql/Queries";

const Home = () => {
  const [search, setSearch] = useState("");
  const [getWeather, { loading, error, data }] = useLazyQuery(
    GET_WEATHER_QUERY,
    { variables: { name: search } }
  );

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>error</h1>;
  }
  if (data) {
    console.log(data);
  }
  return (
    <div className="home">
      <h1>search for weather</h1>
      <input
        type="text"
        placeholder="City name.."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => getWeather()}>search</button>
      {data && (
          <div className="weather">
            <h1>{data.getCityByName.name}</h1>
            <h1>{data.getCityByName.weather.temperature.actual}</h1>
            <h1>{data.getCityByName.weather.summary.description}</h1>
            <h1>wind:{data.getCityByName.weather.wind.speed}</h1>
          </div>
      )}
    </div>
  );
};

export default Home;
