import FoodItems from "./FoodItems";

const FoodBox = (props) => {	

	const foodList = (
		<ul>
			{props.items.map((item) => {
				return <FoodItems key={item.id} name={item.name} />;
			})}
		</ul>
	);

	return <>
		{foodList}
	</>
};

export default FoodBox;