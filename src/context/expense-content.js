import { createContext, useReducer } from "react";
// import uuid from "react-uuid";

const initialState = {
	budget: 1000,
	expenses: [
		{ id: 1, name: "Shopping", cost: 250 },
		{ id: 2, name: "Holiday", cost: 100 },
	],
};

export const ExpenseCtx = createContext();

export const ExpenseProvider = (props) => {
	const [state, dispatch] = useReducer((state, action) => {
		if (action.type === "ADDEXP") {
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		}
		if (action.type === "REMOVE") {
			return {
				...state,
				expenses: state.expenses.filter((el) => el.id !== action.payload),
			};
		}
		if (action.type === "NEW-BUDGET") {
			return {
				...state,
				budget: action.payload,
			};
		}
	}, initialState);

	return (
		<ExpenseCtx.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</ExpenseCtx.Provider>
	);
};
