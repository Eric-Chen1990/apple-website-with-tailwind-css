import React, { useRef, useLayoutEffect } from "react";
import { SourceSansPro } from "@fonts/index";
import gsap from "gsap";

type Props = {};

const Design = (props: Props) => {
	const textOne = useRef(null);
	const textTwo = useRef(null);

	useLayoutEffect(() => {
		let t1 = gsap
			.timeline({
				scrollTrigger: {
					trigger: "#design-section",
					start: "top-=500 top",
					end: "bottom top",
					scrub: 1,
				},
			})
			.fromTo(textOne.current, { x: 0 }, { x: "10%" }, "key1")
			.fromTo(textTwo.current, { x: 0 }, { x: "-10%" }, "key1");

		return () => {
			if (t1) t1.kill();
		};
	}, []);
	return (
		<div
			id='design-section'
			className={`flex flex-col p-6 items-center w-full h-screen overflow-hidden text-2xl md:text-4xl xl:text-6xl capitalize bg-white justify-evenly ${SourceSansPro.className} !font-semibold`}
		>
			<span ref={textOne} className='z-10 self-start text-left'>
				Flaw-less design with strong durability.
			</span>
			<span ref={textTwo} className='self-end text-right z-1'>
				Flat-edge design with toughest smartphone glass.
			</span>
		</div>
	);
};

export default Design;
