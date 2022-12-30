import { useState } from "react";
import "./App.css";
document.title = "Quiz App";

const quizQuestions = [
	{
		question: "How many Infinity Stones are there",
		answer: [
			{
				option: "Five",
				isCorrect: false,
			},
			{
				option: "Six",
				isCorrect: true,
			},
			{
				option: "Seven",
				isCorrect: false,
			},
			{
				option: "Eight",
				isCorrect: false,
			},
		],
	},
	{
		question: "What is the real name of Iron Man",
		answer: [
			{
				option: "Steve Rogers",
				isCorrect: false,
			},
			{
				option: "Bruce Banner",
				isCorrect: false,
			},
			{
				option: "Tony Stark",
				isCorrect: true,
			},
			{
				option: "Peter Parker",
				isCorrect: false,
			},
		],
	},
	{
		question: "Where is Captain America from",
		answer: [
			{
				option: "Sanford",
				isCorrect: false,
			},
			{
				option: "Brooklyn",
				isCorrect: true,
			},
			{
				option: "Canada",
				isCorrect: false,
			},
			{
				option: "Russia",
				isCorrect: false,
			},
		],
	},
	{
		question: "What type of scientist is Jane Foster in Thor",
		answer: [
			{
				option: "Dioptrics",
				isCorrect: false,
			},
			{
				option: "Biologist",
				isCorrect: false,
			},
			{
				option: "Astronomer",
				isCorrect: true,
			},
			{
				option: "Chemist",
				isCorrect: false,
			},
		],
	},
	{
		question: "What does S.H.I.E.L.D stand for",
		answer: [
			{
				option: "Space Human Investigation on Energy, Light and Deities",
				isCorrect: false,
			},
			{
				option:
					"Strategic Hero Intervention, Enforcement and Logistics Division",
				isCorrect: false,
			},
			{
				option: "Stones Hidden In Extraterrestrial Lands and Demographics",
				isCorrect: false,
			},
			{
				option:
					"Strategic Homeland Intervention, Enforcement and Logistics Division",
				isCorrect: true,
			},
		],
	},
];

function App() {
	const [currQuestion, setCurrQuestion] = useState(0);
	const [score, setScore] = useState(false);
	const [scored, setScored] = useState(0);

	const submitAnswer = (correctAnswer) => {
		if (correctAnswer === true) {
			setScored(scored + 1);
		}
		const nextQuestion = currQuestion + 1;

		if (nextQuestion < quizQuestions.length) {
			setCurrQuestion(nextQuestion);
		} else {
			setScore(true);
		}
	};
	return (
		<div className="mainWrap">
			{score ? (
				<div className="scoreWrap">
					You scored {scored} out of {quizQuestions.length}
				</div>
			) : (
				<div className="questionWrap">
					<div className="qBox">
						<h3>Q: {quizQuestions[currQuestion].question}?</h3>
					</div>
					<div className="aBox">
						{quizQuestions[currQuestion].answer.map((el, i) => (
							<button onClick={() => submitAnswer(el.isCorrect)}>
								{i + 1}: {el.option}
							</button>
						))}
					</div>
					<div className="qNum">
						Question: {currQuestion + 1}/{quizQuestions.length}
					</div>
				</div>
			)}
		</div>
	);
}

export default App;