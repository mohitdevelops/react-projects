import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./style.module.css";
import { BiTimer, BiFilterAlt, BiHomeAlt } from "react-icons/bi";
import {
	BsThermometerHalf,
	BsQuestionSquare,
	BsListTask,
} from "react-icons/bs";

export default function AsideMenu() {
	return (
		<Fragment>
			<ul className={classes.list}>
				<li>
					<Link to="/">
						<BiHomeAlt />
						Home
					</Link>
				</li>
				<li>
					<Link to="/countup">
						<BiTimer /> Count up
					</Link>
				</li>
				<li>
					<Link to="/search-filter">
						<BiFilterAlt />
						Search Item Filter
					</Link>
				</li>
				<li>
					<Link to="/temperature-control">
						<BsThermometerHalf />
						Temperature Control
					</Link>
				</li>
				<li>
					<Link to="/marvel-quiz">
						<BsQuestionSquare />
						Marvel Quiz
					</Link>
				</li>
				<li>
					<Link to="/todo-list">
						<BsListTask />
						ToDo List
					</Link>
				</li>
			</ul>
		</Fragment>
	);
}
