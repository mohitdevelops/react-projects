import { useContext } from "react";
import { ExpenseCtx } from "../context/expense-content";

export default function Remaining() {
	const { expenses, budget } = useContext(ExpenseCtx);

	const totalExpCost = expenses.reduce((total, el) => {
		return (total += el.cost);
	}, 0);

	return (
		<div className="status alert alert-danger">
			Remaining <span>${budget - totalExpCost}</span>
		</div>
	);
}
