import classes from "./food.module.css";

const FoodItems = (props) => {	
	return <li className={classes.item}>{props.name}</li>;
}

export default FoodItems;