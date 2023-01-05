import classes from "./style.module.css";
import { BsPlusLg } from "react-icons/bs";
import { useRef, useState } from "react";
import List from "./List";

const Form = () => {
	const listValue = useRef();
	const [input, setInput] = useState("");
	const [todoList, setTodoList] = useState([]);

	const onSubmitListHandler = (e) => {
		e.preventDefault();
		const inputValue = listValue.current.value;

		if (inputValue === "") return;

		setInput("");

		setTodoList((items) => {
			return [inputValue, ...items];
		});
	};

	const parentToChild = (data) => {
		setTodoList(data);
	}

	return (
		<>
			<div className={classes.formWrap}>
				<form onSubmit={onSubmitListHandler}>
					<input
						type="text"
						placeholder="Add task"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						ref={listValue}
					/>
					<button type="submit" className={classes.btn}>
						<BsPlusLg />
					</button>
				</form>
			</div>
			<List todoListItems={todoList} parentToChild={parentToChild}/>
		</>
	);
};

export default Form;
