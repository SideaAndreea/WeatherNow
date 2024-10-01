import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	actionGetLocation,
	actionGetCoordinates,
	actionGetCity,
} from "../redux/pageActions";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Cards from "../page/Card";
import CoordCard from "./CoordCard";
import "./Page.css";

function Page() {
	let dispatch = useDispatch();
	const { weather, latitude, longitude } = useSelector((state) => state);
	const [lat, setLatitude] = useState("");
	const [lon, setLongitude] = useState("");
	const [city, setCity] = useState("");
	const [coord, setCoord] = useState(false);
	const [show, setShow] = useState(false);

	return (
		<div className="container-page">
			<div className="weather">
				<Form>
					<Form.Group className="mb-3" controlId="formBasicLatitude">
						<Form.Label className="label">Latitude</Form.Label>
						<Form.Control
							className="input-text"
							type="text"
							value={lat}
							onChange={(e) => setLatitude(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicLongitude">
						<Form.Label className="label">Longitude</Form.Label>
						<Form.Control
							className="input-text"
							type="text"
							value={lon}
							onChange={(e) => setLongitude(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicName">
						<Form.Label className="label">Or enter city name: </Form.Label>
						<Form.Control
							className="input-text"
							type="text"
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
					</Form.Group>
					<div className="button-group">
						<Button
							className="button-blue"
							variant="primary"
							type="button"
							onClick={(e) => {
								e.preventDefault();
								if (lat && lon && !city) {
									dispatch(actionGetLocation(lat, lon));
									setShow(true);
									setCoord(false);
								}
								if (city && !lat && !lon) {
									dispatch(actionGetCity(city));
									setShow(true);
									setCoord(false);
								}
							}}
						>
							Get location
						</Button>
						<Button
							className="button-green"
							variant="primary"
							type="button"
							onClick={(e) => {
								e.preventDefault();
								if (city) {
									dispatch(actionGetCoordinates(city));
									setShow(false);
									setCoord(true);
								}
							}}
						>
							Get Coordinates
						</Button>
					</div>
				</Form>
			</div>
			{show && weather && (
				<div className="card">
					<Cards
						className="cards"
						name={weather?.name}
						country={weather?.sys?.country}
						weather={weather?.weather?.map((e) => e.main)}
						icon={weather?.weather?.map((e) => e.icon)}
						sunrise={weather?.sys?.sunrise}
						sunset={weather?.sys?.sunset}
						wind={weather?.wind?.speed}
						temp={weather?.main?.temp}
					/>
				</div>
			)}
			{coord && latitude && longitude && (
				<CoordCard latitude={latitude} longitude={longitude} />
			)}
		</div>
	);
}

export default Page;
