import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Model } from "./Model";
import { OrbitControls, Environment } from "@react-three/drei";
import ScrollTrigger from "./ScrollTrigger";
type Props = {};

const Models = (props: Props) => {
	return (
		<div
			id='phone-model'
			className='fixed top-0 w-full h-screen bg-transparent z-10'
		>
			<Canvas camera={{ fov: 16 }}>
				<ambientLight intensity={1.25} />
				<directionalLight intensity={0.4} />
				<Suspense fallback={null}>
					<Model />
					<ScrollTrigger />
				</Suspense>
				<Environment path='/envmap/' files='potsdamer_platz_1k.hdr' />
				{/* <OrbitControls /> */}
			</Canvas>
		</div>
	);
};

export default Models;
