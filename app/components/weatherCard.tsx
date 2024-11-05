import React from "react";
import styled from "styled-components";
import { Weather } from "../interfaces/weather";
import { useEffect } from "react";

const WeatherCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    border: 1px solid black;
    border: 1px solid black;
    margin: 1rem;
    width: 200px;
    border-radius: 10px;
`; 

export default function WeatherCard(props: Weather) {
    useEffect(() => {
        console.log("WeatherCard mounted");
        console.log("Received props:", props);
    }, []);

    console.log("Rendering WeatherCard with props:", props);
    return (
        <WeatherCardWrapper className="weather-card">
            <h3>Date:{props.datetime}</h3>
            <p>Current condition:{props.conditions}</p>
            <p>Temp range (in F°): {props.tempmin}°-{props.tempmax}</p>
            
        </WeatherCardWrapper>
    );
}