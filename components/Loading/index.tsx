import React from "react";

type Props = {};

function Loading({}: Props) {
	return (
		<div className='h-screen w-full z-50 bg-red-400 absolute top-0 left-0'>
			Loading
		</div>
	);
}

export default Loading;
