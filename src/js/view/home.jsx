import React from "react";
import {NavBar} from "../component/NavBar.jsx";
import { Warm } from "../component/Warm.jsx";
import {Cards} from "../component/Cards.jsx";
import { Footer } from "../component/Footer.jsx";

//create your first component

const Home = () => {
	return (
        <div>
		<NavBar/>
        <Warm/>
        <div className="row">
        <Cards img="https://picsum.photos/id/239/200/100"/>
        <Cards img="https://picsum.photos/id/234/200/100"/>
        <Cards img="https://picsum.photos/id/233/200/100"/>
        <Cards img="https://picsum.photos/id/238/200/100"/>
        </div>
        <Footer/>
        </div>
	);
};

export default Home;