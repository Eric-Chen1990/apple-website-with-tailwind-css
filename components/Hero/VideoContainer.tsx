import React from "react";

type Props = {};

const VideoContainer = (props: Props) => {
	return (
		<div className='w-full h-screen overflow-hidden absolute'>
			<video
				src='/video/Ink - 21536.mp4'
				className='object-cover w-full h-full'
				autoPlay
				muted
				loop
			/>
		</div>
	);
};

export default VideoContainer;
