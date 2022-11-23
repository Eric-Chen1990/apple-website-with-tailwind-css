import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

type Props = {};

const Display = (props: Props) => {
	const container = useRef(null);
	const textOne = useRef(null);
	const textTwo = useRef(null);

	useLayoutEffect(() => {
		let t1 = gsap
			.timeline({
				scrollTrigger: {
					trigger: container.current,
					start: "top-=500 top",
					end: "bottom top",
					scrub: 1,
				},
			})
			.fromTo(textOne.current, { x: 0 }, { x: "-20%" }, "key1")
			.fromTo(textTwo.current, { x: 0 }, { x: "20%" }, "key1");

		return () => {
			if (t1) t1.kill();
		};
	}, []);
	return (
		<div
			id='display-section'
			className='flex flex-col justify-around w-full h-[200vh] p-8 text-white bg-black overflow-hidden'
		>
			<h1 className='text-4xl md:text-6xl xl:text-8xl text-gradient'>
				Immersive <br /> Display
			</h1>
			<div className='flex-col self-end w-1/2 text-right'>
				<h2 className='text-xl md:text-2xl'>Super Ratine XDR Display</h2>
				<p className='text-base md:text-lg'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Necessitatibus dignissimos ipsam.
				</p>
			</div>
			<div className='flex-col self-start w-1/2 text-left'>
				<h2 className='text-xl md:text-2xl'>Big is better</h2>
				<p className='text-base md:text-lg'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Necessitatibus dignissimos ipsam.
				</p>
			</div>

			<div
				ref={container}
				className='flex flex-col items-center justify-center w-full h-screen rotate-[-25deg] text-4xl md:text-6xl xl:text-8xl z-10'
			>
				<p ref={textOne} className='p-4 text-gradient'>
					Tougher then ever!
				</p>
				<p ref={textTwo} className='p-4 text-gradient'>
					Every touch matters.
				</p>
			</div>
		</div>
	);
};

export default Display;
