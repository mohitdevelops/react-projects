import { Component, Fragment } from "react";
import "./App.css";
import FindFood from "./comp/FindFood";

class App extends Component {
	render() {
		return (
			<Fragment>
				<FindFood />
			</Fragment>
		);
	}
}

export default App;