import Battery from "@components/Battery";
import Color from "@components/Color";
import Design from "@components/Design";
import Display from "@components/Display";
import Hero from "@components/Hero/";
import Loading from "@components/Loading";
import Models from "@components/Models";
import Processor from "@components/Processor";
import Quote from "@components/Quote/";
import type { NextPage } from "next";
import Head from "next/head";
import { useAppStore } from "store";

const Home: NextPage = () => {
	const loading = useAppStore((state) => state.loading);
	return (
		<>
			<Head>
				<title>Apple website</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			{/* {loading && <Loading />} */}
			<Models />
			<Quote />
			<Hero />
			<Design />
			<Display />
			<Processor />
			<Battery />
			<Color />
		</>
	);
};

export default Home;
