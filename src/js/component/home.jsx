import React, { useState } from "react";
import "../../styles/index.css";

//create your first component
const Home = () => {
	const [lightUp, setLightUp] = useState("")
	const handleClick = (color) => {
		setLightUp(color);}
	return (
		<div className="flex-column d-flex align-items-center">
			<div className="semaforo flex-column  d-flex align-items-center gap-4 rounded p-3 bg-dark">
				<div className={`light_red ${lightUp == "danger" && "lighton_red"}`} onClick={() => { handleClick("danger") }} id="red"></div>
				<div className={`light_yellow ${lightUp == "warning" && "lighton_yellow"}`} onClick={() => { handleClick("warning") }}id="yellow"></div>
				<div className={`light_green ${lightUp == "success" && "lighton_Green"}`} onClick={() => { handleClick("success") }}id="green"></div>
			</div>
			<div className="base bg-dark"></div>
		</div>
	);
};

export default Home;
