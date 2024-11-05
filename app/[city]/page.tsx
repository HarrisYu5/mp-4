"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import styled from "styled-components";
import { Weather } from "../interfaces/weather";
import WeatherCard from "../components/weatherCard";
const WeatherContentWrapper = styled.main`
    width: 80vm;
    margin: auto;
    background-color: #C6AEDD;
`;

const CityName = styled.h1`
    color: #333;
`;

const WeatherCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    border: gold 5px solid;
`;

export default function CityPage() {
    const params = useParams();

    const { data, error } = useSWR(`/api/getWeatherData?city=${params.city}`, (url) =>
        fetch(url).then((res) => res.json())
    );
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    const days = data?.days || [];

    return (
        <WeatherContentWrapper>
          <CityName>{params.city}</CityName>
          <WeatherCardsContainer>
            {
              days.map((weather: Weather, i: number) => 
                (
                  <WeatherCard
                    city="params.city"
                    key={i}
                    datetime={weather.datetime}
                    humidity={weather.humidity}
                    conditions={weather.conditions}
                    description={weather.description}
                    temperature={weather.temperature}
                    tempmin={weather.tempmin}
                    tempmax={weather.tempmax}
                  />
                )
              )
            }
          </WeatherCardsContainer>
        </WeatherContentWrapper>
      );
}