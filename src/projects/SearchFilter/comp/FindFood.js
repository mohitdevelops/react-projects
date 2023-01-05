import { useState, useEffect, Fragment } from "react";
import FoodBox from "./FoodBox";
import classes from "./food.module.css";

const FOOD_ITEMS = [
	{ id: "01", name: "pizza" },
	{ id: "02", name: "burger" },
	{ id: "03", name: "sushi" },
	{ id: "04", name: "pasta" },
	{ id: "05", name: "soup" },
	{ id: "06", name: "cake" },
];

const FindFood = () => {
	const [filterItem, setFilterItem] = useState(FOOD_ITEMS);
	const [searchState, setSearchState] = useState("");

	useEffect(() => {
		setFilterItem(FOOD_ITEMS.filter((item) => item.name.includes(searchState)));
	}, [searchState]);

	const foodItemSearchInput = (event) => {
		setSearchState(event.target.value);
	};

	return (
		<Fragment>
			<div className={classes.searchBox}>
				<input
					type="search"
					onChange={foodItemSearchInput}
					placeholder="Search food item..."
				/>
			</div>
			<div className={classes.foodWrap}>
				<FoodBox items={filterItem} />
			</div>
		</Fragment>
	);
};

export default FindFood;