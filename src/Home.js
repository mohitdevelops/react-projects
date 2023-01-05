import classes from "./style.module.css";

export default function Home(props) {
    console.log(props);
	return (
		<div className={classes.home__page__container}>
			<div className={classes.profile}>                
				<h1>Explore projects</h1>
			</div>
		</div>
	);
}
