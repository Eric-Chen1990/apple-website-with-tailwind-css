import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';
import Text from './Text';
type Props = {};

function Quote({}: Props) {
	gsap.registerPlugin(ScrollTrigger);
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let Elem = sectionRef.current;

		let trigger = ScrollTrigger.create({
			trigger: Elem,
			start: 'top top',
			pin: true,
			pinSpacing: false,
		});

		return () => {
			if (trigger) trigger.kill();
		};
	}, []);

	return (
		<div
			id='quote-section'
			ref={sectionRef}
			className='flex items-center justify-center w-full h-screen bg-black'
		>
			<div className='flex flex-col align-middle'>
				<Text step={0}>“ You can't connect the dots looking forward;</Text>
				<Text step={1}>you can only connect them looking backward.</Text>
				<Text step={2}>so you have to trust that the dots</Text>
				<Text step={3}>will somehow connect in your future. ”</Text>
				<Text step={4} className='m-4 text-end'>
					— Steve Jobs
				</Text>
			</div>
		</div>
	);
}

export default Quote;
