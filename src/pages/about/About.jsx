import React from "react";
import Hero from "../../components/hero/Hero";
import { Outlet } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const About = () => {
	const { data, error, loading } = useFetch("/users");
	return (
		<div id='about'>
			<Hero text={"About page Branch"} />
			<h1>About Branch</h1>
		</div>
	);
};

export default About;
