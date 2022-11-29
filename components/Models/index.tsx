import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";
import { Model } from "./Model";
import { OrbitControls, Environment, useProgress } from "@react-three/drei";
import ScrollTrigger from "./ScrollTrigger";
import { useAppStore } from "store";
type Props = {};

const Models = (props: Props) => {
	const { active, progress, errors, item, loaded, total } = useProgress();
	useEffect(() => {
		useAppStore.setState({ loading: !loaded });
	}, [loaded]);

	return (
		<div
			id='phone-model'
			className='fixed top-0 w-full h-screen bg-transparent z-10'
		>
			<Canvas camera={{ fov: 16 }}>
				<ambientLight intensity={1.25} />
				<directionalLight intensity={0.4} />
				<Suspense fallback={null}>
					<ScrollTrigger />
					<Model />
				</Suspense>
				<Environment path='/envmap/' files='potsdamer_platz_1k.hdr' />
				{/* <OrbitControls /> */}
			</Canvas>
		</div>
	);
};

export default Models;
