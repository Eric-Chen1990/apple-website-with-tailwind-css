import React, { useEffect, useRef } from "react";
import { SourceSansProLight } from "@fonts/index";
import gsap from "gsap";

type Props = {
	step?: number;
	className?: string;
	children?: React.ReactNode;
};

const Text = ({ className = "", step = 0, children }: Props) => {
	const spanRef = useRef<HTMLSpanElement | null>(null);

	useEffect(() => {
		gsap.fromTo(
			spanRef.current,
			{
				y: 100,
			},
			{
				y: 0,
				delay: step * 0.4,
				duration: 2.5,
			}
		);
	}, []);

	return (
		<div className={`overflow-hidden ${className}`}>
			<span
				ref={spanRef}
				className='block text-xl sm:text-2xl md:text-3xl text-gradient'
				style={SourceSansProLight.style}
			>
				{children}
			</span>
		</div>
	);
};

export default Text;
