import React, { useRef, useLayoutEffect, useState, Suspense } from "react";
import gsap from "gsap";
import { useColorStore } from "store";
import { Canvas } from "@react-three/fiber";
import { Model } from "@components/Models/Model";
import { Environment, OrbitControls } from "@react-three/drei";
import { SourceSansPro } from "@fonts/index";
type Props = {};

const Color = (props: Props) => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const { color, text, rgbColor } = useColorStore((state) => state);

	useLayoutEffect(() => {
		let Elem = sectionRef.current as HTMLDivElement;

		let updateColor = (color: string, text: string, rgbColor: string): void => {
			useColorStore.setState({ color, text, rgbColor });
		};

		// pin the section
		gsap.to(Elem, {
			scrollTrigger: {
				trigger: Elem,
				start: "top top",
				end: `+=${Elem.offsetWidth + 1000}`,
				scrub: 1,
				pin: true,
				pinSpacing: true,
			},
		});

		let t2 = gsap
			.timeline({
				scrollTrigger: {
					trigger: Elem,
					start: "top top",
					end: `+=${Elem.offsetWidth + 1000}`,
					scrub: 1,
				},
			})
			.to(Elem, {
				onStart: updateColor,
				onStartParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
				onReverseComplete: updateColor,
				onReverseCompleteParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
			})
			.to(Elem, {
				onStart: updateColor,
				onStartParams: ["#F9E5C9", "Gold", "249, 229, 201"],
				onReverseComplete: updateColor,
				onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"],
			})
			.to(Elem, {
				onStart: updateColor,
				onStartParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
				onReverseComplete: updateColor,
				onReverseCompleteParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
			})
			.to(Elem, {
				onStart: updateColor,
				onStartParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
				onReverseComplete: updateColor,
				onReverseCompleteParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
			})
			.to(Elem, {
				onStart: updateColor,
				onStartParams: ["#A50011", "Red", "165, 0, 17"],
				onReverseComplete: updateColor,
				onReverseCompleteParams: ["#A50011", "Red", "165, 0, 17"],
			})
			.to(Elem, {
				onStart: updateColor,
				onStartParams: ["#215E7C", "Blue", "33, 94, 124"],
				onReverseComplete: updateColor,
				onReverseCompleteParams: ["#215E7C", "Blue", "33, 94, 124"],
			});

		return () => {
			if (t2) t2.kill();
		};
	}, []);

	return (
		<div
			id='color-section'
			ref={sectionRef}
			className='items-center w-full h-screen bg-white flex relative'
		>
			<div
				style={{ backgroundColor: `rgba(${rgbColor}, 0.8)` }}
				className='w-full md:w-1/2 h-screen'
			/>
			<div
				style={{ backgroundColor: `rgba(${rgbColor}, 0.4)` }}
				className='w-1/2 h-screen hidden md:block'
			>
				<Canvas frameloop='demand' camera={{ fov: 6.5 }}>
					<ambientLight intensity={1.25} />
					<directionalLight intensity={0.4} />
					<Suspense fallback={null}>
						<Model position={[0.1, -0.4, 0]} />
					</Suspense>
					<Environment path='/envmap/' files='potsdamer_platz_1k.hdr' />
					{/* <OrbitControls /> */}
				</Canvas>
			</div>
			<p
				style={{ color: color }}
				className={`absolute uppercase brightness-[0.85] -translate-x-1/2 -translate-y-1/2 md:-rotate-90 text-center left-1/2 top-16 md:top-1/2 text-2xl md:text-4xl xl:text-6xl ${SourceSansPro.className}`}
			>
				{text}
			</p>
		</div>
	);
};

export default Color;
