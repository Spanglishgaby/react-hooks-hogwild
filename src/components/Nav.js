import React from "react";
import piggy from "../assets/porco.png";


const Nav = () => {
	
const renderhogs = hogs.map( (hog) => ({
name: hog.name
image : hog.image
}))

}	
//  image = hogs.image

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span> // print name
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" /> // print image
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
		</div>
	);
};

export default Nav;
