import Card from "react-bootstrap/Card";
import React from "react";

const CoordCard = ({ latitude, longitude }) => {
	return (
		<Card
			style={{
				width: "18rem",
				margin: "20px auto",
				boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
				textAlign: "center",
			}}
		>
			<Card.Body>
				<Card.Title>Coordinates for the city:</Card.Title>
				<Card.Text>
					<span>Latitude: {latitude}</span>
					<br />
					<span>Longitude: {longitude}</span>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default CoordCard;
