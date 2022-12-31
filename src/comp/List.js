import { BsFillCheckSquareFill } from "react-icons/bs";
import classes from "./style.module.css";

const List = ({ todoListItems, parentToChild }) => {
	const deleteItem = (currEl) => {
		console.log(currEl);
		const newData = todoListItems.filter((_, i) => {
			return i !== currEl;
		});
		// Sending data to parent
		parentToChild(newData);
	};

	const listItem = todoListItems.map((item, index) => {
		return (
			<li key={Math.random() * index} id={Math.random() * index}>
				{item}{" "}
				<BsFillCheckSquareFill
					className={classes.check}
					onClick={() => deleteItem(index)}
				/>
			</li>
		);
	});

	return (
		<>
			<ul className={classes.list}>{listItem}</ul>
		</>
	);
};

export default List;
