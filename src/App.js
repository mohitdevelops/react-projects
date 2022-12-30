import "./App.css";
import { BiPlusMedical, BiMinus } from "react-icons/bi";
import { useState } from "react";

function App() {

	const [startNum, setStartNum] = useState(0);

	return (
		<div className="mainWrap">
			<button onClick={() => setStartNum(startNum + 1)}>
				<BiPlusMedical />
			</button>
			<div className="number">{startNum}</div>
			<button onClick={() => setStartNum(startNum - 1)}>
				<BiMinus />
			</button>
		</div>
	);
}

export default App;