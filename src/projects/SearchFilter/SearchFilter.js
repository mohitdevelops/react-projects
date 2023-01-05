import classes from "./style.module.css";
import FindFood from "./comp/FindFood";

export default function SearchFilter() {
	return (
		<main className={classes.searchfilter_main}>
			<FindFood />
		</main>
	);
}
