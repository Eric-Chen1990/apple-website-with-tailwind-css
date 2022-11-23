import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

type Props = {};

const Battery = (props: Props) => {
	const battery = useRef(null);
	let elements = gsap.utils.selector(battery);
	const items = Array.from({ length: 5 });
	useLayoutEffect(() => {
		let t1 = gsap.timeline({});

		elements("li").forEach((el) => {
			t1.to(el, {
				scrollTrigger: {
					trigger: el,
					start: "top center",
					end: "bottom center",
					scrub: 1,
					// markers: true,
				},
				opacity: 1,
			});
		});

		return () => {};
	}, []);
	return (
		<div
			id='battery-section'
			className='items-center w-full h-screen bg-white flex flex-col md:flex-row justify-center'
		>
			<h1 className='text-4xl md:text-6xl xl:text-8xl w-4/5 md:w-3/5 m-8 z-20'>
				Go all day with single charge...
			</h1>
			<ul
				ref={battery}
				className='border-solid border-black border-4 rounded-lg w-72 md:w-60 p-2 m-4'
			>
				{items.map((item, i) => {
					return (
						<li key={i} className='w-full h-20 bg-gradient my-2 opacity-0' />
					);
				})}
			</ul>
		</div>
	);
};

export default Battery;
