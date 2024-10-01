import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Card.css";

const formatTime = (timestamp) => {
	const date = new Date(timestamp * 1000);
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");
	return `${hours}:${minutes}`;
};

const Cards = ({
	name,
	country,
	weather,
	icon,
	sunrise,
	sunset,
	wind,
	temp,
}) => {
	return (
		<Card className="cardStyle" style={{ width: "18rem" }}>
			<Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item>
						{"Locația: "}
						<span>{name}</span> <span>{country}</span>
					</ListGroup.Item>
					<ListGroup.Item>
						<span>{weather}</span>
						<img
							src={`http://openweathermap.org/img/wn/${icon}.png`}
							alt="Icon"
							width="50px"
						/>
					</ListGroup.Item>
					<ListGroup.Item>
						{"Soarele răsare: "}
						<span>{formatTime(sunrise)}</span>
					</ListGroup.Item>
					<ListGroup.Item>
						{"Soarele apune: "}
						<span>{formatTime(sunset)}</span>
					</ListGroup.Item>
					<ListGroup.Item>
						{"Viteză vânt: "}
						<span>{wind}</span>
					</ListGroup.Item>
					<ListGroup.Item>
						{"Temperatura: "}
						<span>{temp}</span>
					</ListGroup.Item>
				</ListGroup>
			</Card.Body>
		</Card>
	);
};
export default Cards;
