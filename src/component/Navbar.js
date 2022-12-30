import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Nav.css";
import logo from "./logo.png";
import { useState } from "react";

const menuItems = [
	{ item: "Home", url: "#", class: "nav-item" },
	{ item: "About us", url: "#", class: "nav-item" },
	{ item: "Services", url: "#", class: "nav-item" },
	{ item: "Career", url: "#", class: "nav-item" },
	{ item: "Blogs", url: "#", class: "nav-item" },
	{ item: "Get in touch", url: "#", class: "nav-item nav-btn" },	
];

const Navbar = () => {

	const [menu, setMenu] = useState(true);
	
	const toggleMenu = () => {
		setMenu(prev => !prev);
	}

	return (
		<nav>
			<div className="container">
				<div className="logoWrap">
					<a href="https://github.com/mohitdevelops" target="_blank">
						<img src={logo} alt="Logo" />
					</a>
				</div>
				<div className="menuBar" onClick={toggleMenu}>
					{menu ? <AiOutlineMenu /> : <AiOutlineClose />}
				</div>
				<div className={`navBar ${!menu ? 'toggle' : ''}`}>
					<ul>
						{menuItems.map((el, i) => {
                            return <li key={i} className={el.class}>
                                <a href={el.url}>{el.item}</a>
                            </li>
                        })}
					</ul>
				</div>
				
			</div>
		</nav>
	);
};

export default Navbar;