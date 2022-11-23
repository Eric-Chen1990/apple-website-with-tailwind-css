import Image from "next/image";
import React from "react";
import { SourceSansProLight } from "@fonts/index";

type Props = {};

const Processor = (props: Props) => {
	return (
		<div
			id='processor-section'
			className='relative items-center w-full h-screen bg-black'
		>
			<Image
				className='absolute w-1/4 p-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-box-shadow-glow hidden xl:block'
				src='/Images/A15-Bionic.jpg'
				width={400}
				height={400}
				alt='A15 processor'
			/>
			<h1 className='text-4xl md:text-6xl xl:text-8xl text-gradient absolute bottom-8 left-1/2 text-center -translate-x-1/2 w-full'>
				Fastest Processor
			</h1>
			<div
				className='w-full md:w-1/2 xl:w-1/3 p-4 md:p-8 gap-2 h-full flex flex-col justify-center absolute text-sm md:text-base text-gray-300 items-center'
				style={SourceSansProLight.style}
			>
				<span className='self-start text-left w-2/5 md:w-full'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Reprehenderit numquam quae nisi, dolore cum voluptatem cumque quo sit,
					consequuntur necessitatibus iste fuga assumenda deserunt aut omnis,
					quaerat aliquid optio veniam.
				</span>
				<span className='self-end text-right w-2/5 md:w-full'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Reprehenderit numquam quae nisi, dolore cum voluptatem cumque quo sit,
					consequuntur necessitatibus iste fuga assumenda deserunt aut.
				</span>
			</div>
		</div>
	);
};

export default Processor;
