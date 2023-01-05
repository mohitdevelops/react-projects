import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import classes from "./style.module.css";

export default function TemperatureControl() {
	const [temp, setTemp] = useState(17);
	const [colorChange, setColorChange] = useState(classes.normal);

	const increaseTemp = () => {
		if (temp === 30) return;
		const currTemp = temp + 1;
		setTemp(currTemp);
		if (currTemp >= 25) {
			setColorChange(classes.hot);
		} else if (currTemp < 25 && currTemp > 10) {
			setColorChange(classes.normal);
		}
	};

	const decreaseTemp = () => {
		if (temp === 0) return;
		const currTemp = temp - 1;
		setTemp(currTemp);
		if (currTemp <= 10) {
			setColorChange(classes.cold);
		} else if (currTemp < 25 && currTemp > 10) {
			setColorChange(classes.normal);
		}
	};

	return (
		<div className={classes.temp__wrap}>
			<h4>Control the Temperature</h4>
			<p>(10°C is Cold and 25°C is hot)</p>
			<div className={`${classes.temp} ${colorChange}`}>
				<div>{temp}°C</div>
			</div>
			<div className={classes.control}>
				<button onClick={decreaseTemp}>
					<FaMinus />
				</button>
				<button onClick={increaseTemp}>
					<FaPlus />
				</button>
			</div>
		</div>
	);
}
