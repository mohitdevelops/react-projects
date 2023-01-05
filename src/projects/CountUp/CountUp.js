import classes from "./style.module.css";
import { BiPlusMedical, BiMinus } from "react-icons/bi";
import { useState } from "react";

export default function CountUp() {
	const [startNum, setStartNum] = useState(0);

	return (
		<main className={classes.countup_main}>
			<div className={classes.mainWrap}>
				<button onClick={() => setStartNum(startNum - 1)}>
					<BiMinus />
				</button>
				<div className={classes.number}>{startNum}</div>
				<button onClick={() => setStartNum(startNum + 1)}>
					<BiPlusMedical />
				</button>
			</div>
		</main>
	);
}
