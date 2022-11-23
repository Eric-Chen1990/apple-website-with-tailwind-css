import React from "react";
import VideoContainer from "./VideoContainer";

type Props = {};

const Hero = (props: Props) => {
	return (
		<div id='hero-section' className='items-center w-full h-screen bg-black'>
			<VideoContainer />
			<h1 className='absolute p-4 text-xl md:p-8 md:text-3xl text-slate-300'>
				iPhone 14 Pro Max
			</h1>
			<div className='absolute flex justify-between w-full h-screen p-4 text-3xl font-bold text-transparent md:p-8 sm:text-5xl md:text-7xl bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-300'>
				<span className='self-start my-8 md:self-center'>So.Cold.</span>
				<span className='self-end md:self-center'>So.Bold.</span>
			</div>
		</div>
	);
};

export default Hero;
