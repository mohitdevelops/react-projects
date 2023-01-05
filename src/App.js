import { Route, Routes } from "react-router";
import classes from "./style.module.css";
import AsideMenu from "./AsideMenu";
import CountUp from "./projects/CountUp/CountUp";
import MarvelQuiz from "./projects/MarvelQuiz/MarvelQuiz";
import SearchFilter from "./projects/SearchFilter/SearchFilter";
import TemperatureControl from "./projects/TemperatureControl/TemperatureControl";
import TodoList from "./projects/TodoList/TodoList";
document.title = 'React Projects';

function App() {
	return (
		<div className={classes.main__container}>
			<aside className={classes.side_bar}>
				<h4>Project List</h4>
				<AsideMenu />
			</aside>
			<div className={classes.app_container}>
				<Routes>	
					<Route path="/countup" element={<CountUp />} />
					<Route path="/search-filter" element={<SearchFilter />} />
					<Route path="/temperature-control" element={<TemperatureControl />} />
					<Route path="/marvel-quiz" element={<MarvelQuiz />} />
					<Route path="/todo-list" element={<TodoList />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
