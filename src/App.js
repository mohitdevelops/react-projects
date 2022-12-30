import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./App.css";
document.title = "Temperature Control";

function App() {
	const [temp, setTemp] = useState(17);
	const [colorChange, setColorChange] = useState("normal");

	const increaseTemp = () => {
		if (temp === 30) return;
		const currTemp = temp + 1;
		setTemp(currTemp);
		if (currTemp >= 25) {
			setColorChange("hot");
		} else if (currTemp < 25 && currTemp > 10) {
			setColorChange("normal");
		}
	};

	const decreaseTemp = () => {
		if (temp === 0) return;
		const currTemp = temp - 1;
		setTemp(currTemp);
		if (currTemp <= 10) {
			setColorChange("cold");
		} else if (currTemp < 25 && currTemp > 10) {
			setColorChange("normal");
		}
	};

	return (
		<div className="mainWrap">
      <h4>Control the Temperature</h4>
      <p>(10°C is Cold and 25°C is hot)</p>
			<div className={`temp ${colorChange}`}>
				<div>{temp}°C</div>
			</div>
			<div className="control">
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

export default App;