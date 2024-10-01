import axios from "axios";
import { GET_LOCATION } from "./pageTypes";
import { GET_COORDINATES } from "./pageTypes";
import { GET_CITY } from "./pageTypes";

export const getLocation = (weather) => {
	return {
		type: GET_LOCATION,
		payload: weather,
	};
};

export const getCoordinates = (lat, lon) => {
	return {
		type: GET_COORDINATES,
		payload: { lat, lon },
	};
};

export const getCity = (weather) => {
	return {
		type: GET_CITY,
		payload: weather,
	};
};

export const actionGetLocation = (lat, lon) => {
	return (dispatch) => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid="YOUR_API"&units=metric`
			)
			.then((response) => {
				dispatch(getLocation(response.data));
			})
			.catch((error) => {
				console.log("Error", error);
			});
	};
};

export const actionGetCoordinates = (city) => {
	return (dispatch) => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid="YOUR_API"`
			)
			.then((response) => {
				console.log("City data:", response.data);
				const { coord } = response.data;
				console.log("Coordinates:", coord);
				dispatch(getCoordinates(coord.lat, coord.lon));
			})
			.catch((error) => {
				console.log("Error", error);
			});
	};
};

export const actionGetCity = (city) => {
	return (dispatch) => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid="YOUR_API"`
			)
			.then((response) => {
				dispatch(getCity(response.data));
			})
			.catch((error) => {
				console.log("Error", error);
			});
	};
};
