import Battery from "@components/Battery";
import Color from "@components/Color";
import Design from "@components/Design";
import Display from "@components/Display";
import Hero from "@components/Hero/";
import Models from "@components/Models";
import Processor from "@components/Processor";
import Quote from "@components/Quote/";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Apple website</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Quote />
			<Hero />
			<Models />
			<Design />
			<Display />
			<Processor />
			<Battery />
			<Color />
		</>
	);
};

export default Home;
